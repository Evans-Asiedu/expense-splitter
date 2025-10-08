import { useEffect, useState } from "react";
import type { Expense } from "../../models/GroupModels";
import ExpenseCard from "../ExpenseCard";
import {
  deleteExpense,
  getExpenses,
  saveExpense,
} from "../../services/ExpenseService";
import Button from "../Button";
import ExpenseForm from "../ExpenseForm";
import type { ExpenseData } from "../ExpenseForm";
import ConfirmDialog from "../ConfirmDialog";

interface Props {
  groupId: string;
}

const ExpensesPage = ({ groupId }: Props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);
  const [expense, setExpense] = useState<Expense | null>(null);
  const [selectedExpenseId, setSelectedExpenseId] = useState<string>("");

  const showForm = (expenseId: string | null) => {
    if (expenseId === null) {
      setIsFormOpen(true);
      setExpense(null);
      return;
    }

    setIsFormOpen(true);

    const currentExpense = expenses.find((e) => e.id === expenseId);
    setExpense(currentExpense ?? null);
    setSelectedExpenseId(expenseId);
  };

  const showConfirmDialog = (expenseId: string) => {
    setSelectedExpenseId(expenseId);
    setIsConfirmDialogOpen(true);
  };

  const handleSubmit = (expense: ExpenseData) => {
    // handling new expenses or edit
    console.log("expense:", expense);

    setExpenses((prev) =>
      prev.some((e) => e.id === expense.id)
        ? prev.map((e) => (e.id === expense.id ? expense : e))
        : [...prev, expense]
    );

    // save expense it to database;
    saveExpense(groupId, expense);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setSelectedExpenseId("");
  };

  const handleDeleteExpense = (expenseId: string) => {
    // remove expense from list of expenses
    const updatedExpenses = expenses.filter((e) => e.id !== expenseId);
    setExpenses(updatedExpenses);
    setIsConfirmDialogOpen(false);

    // remove expense from db & save
    try {
      deleteExpense(groupId, expenseId);
    } catch (error: unknown) {
      console.log(error); // need to be look at

      setExpenses(expenses);
    }
  };

  useEffect(() => {
    // get expense from data base;
    setExpenses(getExpenses(groupId));
  }, [groupId]);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseCard
          expense={expense}
          onEdit={showForm}
          onDelete={showConfirmDialog}
          selectedId={selectedExpenseId}
        />
      ))}

      <div>
        {isFormOpen && (
          <ExpenseForm
            onSubmit={(expense) => handleSubmit(expense)}
            onClose={handleFormClose}
            expense={expense}
          />
        )}
      </div>

      <div>
        {isConfirmDialogOpen && (
          <ConfirmDialog
            name="confirmation"
            onCancel={() => {
              setIsConfirmDialogOpen(false);
            }}
            onDelete={() => handleDeleteExpense(selectedExpenseId)}
          />
        )}
      </div>

      <div>
        <Button
          name="Add Expense"
          isPrimary={true}
          color={"w-full mt-1.5 bg-primary text-secondary-txt hover:bg-sky-500"}
          onClick={() => showForm(null)}
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
