import type { Expense } from "../models/GroupModels";
import { data as groups } from "../data/data";

//CRUD

// READ
export function getExpenses(groupId: string): Expense[] {
  const group = groups.find((g) => g.id === groupId);
  return group ? [...group.expenseList] : [];
}

export function getExpense(groupId: string, expenseId: string): Expense | null {
  const group = groups.find((g) => g.id === groupId);
  if (!group) return null;

  const expense = group.expenseList.find((e) => e.id === expenseId);
  if (!expense) return null;

  return expense;
}

// CREATE && UPDATE
export function saveExpense(groupId: string, expense: Expense): Expense | null {
  const group = groups.find((g) => g.id === groupId);
  if (!group) return null;

  // Add new expense
  const currentExpense = group.expenseList.find((e) => e.id === expense.id);
  if (!currentExpense) {
    const newExpense: Expense = { ...expense };
    group.expenseList.push(newExpense);
    return newExpense;
  }

  // update existing expense
  Object.assign(currentExpense, expense);
  return currentExpense;
}

// UPDATE
// export function updateExpense(
//   groupId: string,
//   expenseId: string,
//   updatedExpense: Expense
// ): Expense | null {
//   const group = groups.find((g) => g.id === groupId);
//   if (!group) return null;

//   const expense = group.expenseList.find((e) => e.id === expenseId);
//   if (!expense) return null;

//   Object.assign(expense, updatedExpense);
//   return expense;
// }

//DELETE
export function deleteExpense(groupId: string, expenseId: string): boolean {
  const group = groups.find((g) => g.id === groupId);
  if (!group) return false;

  const index = group.expenseList.findIndex((e) => e.id === expenseId);
  if (index === -1) return false;

  group.expenseList.splice(index, 1);
  return true;
}
