import type { Expense } from "../models/GroupModels";
import { getGroups, saveGroup } from "./GroupService";
// import { data as groups } from "../data/data";

// READ
export function getExpenses(groupId: string): Expense[] {
  const groups = getGroups();
  const group = groups.find((g) => g.id === groupId);
  return group ? [...group.expenseList] : [];
}

export function getExpense(groupId: string, expenseId: string): Expense | null {
  const groups = getGroups();
  const group = groups.find((g) => g.id === groupId);
  if (!group) return null;

  const expense = group.expenseList.find((e) => e.id === expenseId);
  if (!expense) return null;

  return expense;
}

// CREATE && UPDATE
export function saveExpense(groupId: string, expense: Expense): Expense | null {
  const groups = getGroups();
  const group = groups.find((g) => g.id === groupId);
  if (!group) return null;

  // Add new expense
  const existingExpense = group.expenseList.find((e) => e.id === expense.id);

  if (!existingExpense) {
    group.expenseList.push({ ...expense });
  } else {
    Object.assign(existingExpense, expense);
  }

  // update existing expense
  saveGroup(group);
  return expense;
}

//DELETE
export function deleteExpense(groupId: string, expenseId: string): boolean {
  const groups = getGroups();
  const group = groups.find((g) => g.id === groupId);
  if (!group) return false;

  const index = group.expenseList.findIndex((e) => e.id === expenseId);
  if (index === -1) return false;

  group.expenseList.splice(index, 1);
  saveGroup(group);
  return true;
}
