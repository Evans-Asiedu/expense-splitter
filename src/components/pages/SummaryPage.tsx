import { useEffect, useState } from "react";
import type { Expense } from "../../models/GroupModels";
import { getExpenses } from "../../services/ExpenseService";
import SummaryCard from "../SummaryCard";

interface Props {
  groupId: string;
}

const SummaryPage = ({ groupId }: Props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    setExpenses(getExpenses(groupId));
  }, [groupId]);

  return (
    <div>
      {expenses.map((expense) => (
        <SummaryCard
          key={expense.id}
          expense={expense}
          isOpen={openId === expense.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default SummaryPage;
