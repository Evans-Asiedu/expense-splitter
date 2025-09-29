import { useEffect, useState } from "react";
import type { Expense } from "../../models/GroupModels";
import ExpenseCard from "../ExpenseCard";
import { getExpenses, saveExpense } from "../../services/ExpenseService";
import Button from "../Button";
import ExpenseForm from "../ExpenseForm";
import type { ExpenseData } from "../ExpenseForm";

interface Props {
  groupId: string;
}

const ExpensesPage = ({ groupId }: Props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
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
    // const currentExpense = expenses.find((e) => e.id === expenseId);
    // setExpense(currentExpense ?? null);
    setSelectedExpenseId(expenseId);
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

  useEffect(() => {
    // get expense from data base;
    setExpenses(getExpenses(groupId));
  }, [groupId]);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseCard
          expense={expense}
          onClickExpenseItem={showForm}
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
        <Button
          name="Add Expense"
          isPrimary={true}
          onClick={() => showForm(null)}
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
