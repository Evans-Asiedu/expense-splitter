import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Expense, Group } from "../models/GroupModels";
import { loadGroupsFromStorage, saveGroupsToStorage } from "../utils/Storage";
import { data as initialData } from "../data/data";

interface GroupContextType {
  groups: Group[];
  addGroup: (group: Group) => void;
  updateGroup: (updatedGroup: Group) => void;
  deleteGroup: (groupId: string) => void;
  getGroupById: (groupId: string) => Group | null;

  // Expense operations withing groups
  addExpense: (groupId: string, expense: Expense) => void;
  saveExpense: (groupId: string, expense: Expense) => void;
  updateExpense: (groupId: string, updatedExpense: Expense) => void;
  deleteExpense: (groupId: string, expenseId: string) => void;

  // New expense getters
  getExpenses: (groupId: string) => Expense[] | null;
  getExpense: (groupId: string, expenseId: string) => Expense | null;
}

const GroupContext = createContext<GroupContextType | null>(null);

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const storedGroups = loadGroupsFromStorage() || initialData;
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);

  useEffect(() => {
    saveGroupsToStorage(groups);
  }, [groups]);

  /* -- GROUP OPERATIONS -- */
  const getGroupById = (groupId: string): Group | null => {
    const group = groups.find((g) => g.id === groupId);
    return group ? group : null;
  };

  const addGroup = (group: Group) => {
    setGroups((prev) => [...prev, group]);
  };

  const updateGroup = (updatedGroup: Group) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === updatedGroup.id ? updatedGroup : g))
    );
  };

  const deleteGroup = (groupId: string) => {
    setGroups((prev) => prev.filter((g) => g.id !== groupId));
  };

  /* -- EXPENSE OPERATIONS (inside groups) -- */
  const addExpense = (groupId: string, expense: Expense) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId ? { ...g, expenses: [...g.expenses, expense] } : g
      )
    );
  };

  const updateExpense = (groupId: string, updatedExpense: Expense) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? {
              ...g,
              expenses: g.expenses.map((e) =>
                e.id === updatedExpense.id ? updatedExpense : e
              ),
            }
          : g
      )
    );
  };

  // Unified Add and Update Expense
  const saveExpense = (groupId: string, expense: Expense) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => {
        if (group.id !== groupId) return group;

        const existingExpense = group.expenses.find((e) => e.id === expense.id);
        let updatedExpenses;

        if (existingExpense) {
          updatedExpenses = group.expenses.map((e) =>
            e.id === expense.id ? expense : e
          );
        } else {
          updatedExpenses = [...group.expenses, expense];
        }

        // recalculate totals
        const totalExpenses = updatedExpenses.reduce(
          (sum, e) => sum + e.amount,
          0
        );

        const expensesCount = updatedExpenses.length;

        return {
          ...group,
          expenses: updatedExpenses,
          totalExpenses,
          expensesCount,
        };
      })
    );
  };

  const deleteExpense = (groupId: string, expenseId: string) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => {
        if (group.id !== groupId) return group;

        const updatedExpenses = group.expenses.filter(
          (e) => e.id !== expenseId
        );

        const totalExpenses = updatedExpenses.reduce(
          (sum, e) => sum + e.amount,
          0
        );

        const expensesCount = updatedExpenses.length;

        return {
          ...group,
          expenses: updatedExpenses,
          totalExpenses,
          expensesCount,
        };
      })
    );
  };

  // ---- EXPENSE GETTERS ----
  const getExpenses = (groupId: string): Expense[] | null => {
    console.log("groups: ", groups);
    const group = groups.find((g) => g.id === groupId);
    console.log("id:", groupId);
    return group ? group.expenses : null;
  };

  const getExpense = (groupId: string, expenseId: string): Expense | null => {
    const group = groups.find((g) => g.id === groupId);
    if (!group) return null;
    return group.expenses.find((e) => e.id === expenseId) ?? null;
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        getGroupById,
        addGroup,
        updateGroup,
        deleteGroup,
        addExpense,
        saveExpense,
        updateExpense,
        deleteExpense,
        getExpenses,
        getExpense,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroups = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroups must be used within a GroupProvider");
  }

  return context;
};
