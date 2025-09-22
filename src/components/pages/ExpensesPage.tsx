import { useEffect, useState } from "react";
import type { Expense } from "../../models/GroupModels";
import ExpenseCard from "../ExpenseCard";
import { getExpenses } from "../../services/ExpenseService";

interface Props {
  groupId: string;
}

const ExpensesPage = ({ groupId }: Props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    setExpenses(getExpenses(groupId));
  }, [groupId]);

  console.log(groupId);
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseCard expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesPage;
