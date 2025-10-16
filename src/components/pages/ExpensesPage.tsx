import { useEffect, useState } from "react";
import type { Expense } from "../../models/GroupModels";
import ExpenseCard from "../ExpenseCard";
import Button from "../Button";
import ExpenseForm from "../ExpenseForm";
import type { ExpenseData } from "../ExpenseForm";
import ConfirmDialog from "../ConfirmDialog";
import { Modal } from "../Modal";
import { useGroups } from "../../context/GroupContext";

interface Props {
  groupId: string;
}

const ExpensesPage = ({ groupId }: Props) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);
  const [expense, setExpense] = useState<Expense | null>(null);
  const [selectedExpenseId, setSelectedExpenseId] = useState<string>("");

  const { getExpenses, saveExpense, deleteExpense } = useGroups();

  const expenses = groupId ? getExpenses(groupId) : [];

  const showForm = (expenseId: string | null) => {
    if (expenseId === null) {
      setIsFormOpen(true);
      setExpense(null);
      return;
    }

    setIsFormOpen(true);

    const currentExpense = expenses
      ? expenses.find((e) => e.id === expenseId)
      : null;
    setExpense(currentExpense ?? null);
    setSelectedExpenseId(expenseId);
  };

  const showConfirmDialog = (expenseId: string) => {
    setSelectedExpenseId(expenseId);
    setIsConfirmDialogOpen(true);
  };

  const handleSubmit = (expense: ExpenseData) => {
    saveExpense(groupId, expense);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setSelectedExpenseId("");
  };

  const handleDeleteExpense = (expenseId: string) => {
    deleteExpense(groupId, expenseId);
    setIsConfirmDialogOpen(false);
  };

  useEffect(() => {
    console.log("expenses", getExpenses(groupId));
  });

  if (!expenses) return <p>Loading...</p>;

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onEdit={showForm}
          onDelete={showConfirmDialog}
          selectedId={selectedExpenseId}
        />
      ))}

      <Modal isOpen={isFormOpen} onClose={handleFormClose}>
        <ExpenseForm
          onSubmit={handleSubmit}
          onClose={handleFormClose}
          expense={expense}
        />
      </Modal>

      <Modal
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
      >
        <ConfirmDialog
          name="confirmation"
          onCancel={() => {
            setIsConfirmDialogOpen(false);
          }}
          onDelete={() => handleDeleteExpense(selectedExpenseId)}
        />
      </Modal>

      <Button
        name="Add Expense"
        isPrimary={true}
        color={"w-full mt-1.5 bg-primary text-secondary-txt hover:bg-sky-500"}
        onClick={() => showForm(null)}
      />
    </div>
  );
};

export default ExpensesPage;
