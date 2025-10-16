import { useState } from "react";
// import type { Expense } from "../../models/GroupModels";
// import { getExpenses } from "../../services/ExpenseService";
import SummaryCard from "../SummaryCard";
import { useGroups } from "../../context/GroupContext";

interface Props {
  groupId: string;
}

const SummaryPage = ({ groupId }: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const { getExpenses } = useGroups();

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const expenses = groupId ? getExpenses(groupId) : [];

  if (!expenses) return <p>Loading...</p>;

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
