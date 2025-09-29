//import { useState } from "react";
import type { Expense } from "../models/GroupModels";
//import ExpenseForm from "./ExpenseForm";

interface Props {
  expense: Expense;
  onClickExpenseItem: (expenseId: string) => void;
  selectedId: string;
}

const ExpenseCard = ({ expense, onClickExpenseItem, selectedId }: Props) => {
  const { id, description, amount, date, expenseParticipants } = expense;

  /* hover:border-0 border-accent-txt hover:bg-secondary hover:cursor-pointer  */
  return (
    <div className=" px-4 ">
      <div className="flex gap-3 justify-between items-center mb-4">
        <div className="px-3 py-3 sm:px-4 sm:py-3 bg-secondary rounded-xl">
          <i className="fa fa-money" aria-hidden="true"></i>
        </div>
        <div>
          <p className="text-primary-txt text-md font-semibold">
            {description}
          </p>
          <div className="flex items-end gap-x-2 mt-1">
            <p className="text-accent-txt text-sm">${amount}</p>
            <p className="text-accent-txt text-sm">
              - {expenseParticipants.length} Participants
            </p>
            <p className="text-accent-txt text-sm"> - {date}</p>
          </div>
        </div>
        <div
          className="ml-auto hover:cursor-pointer"
          onClick={() => onClickExpenseItem(expense.id)}
        >
          <i
            className={
              selectedId === id ? "fa fa-chevron-down" : "fa fa-chevron-right"
            }
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
