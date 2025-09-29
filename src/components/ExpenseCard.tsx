//import { useState } from "react";
import type { Expense } from "../models/GroupModels";
//import ExpenseForm from "./ExpenseForm";

interface Props {
  expense: Expense;
  onEdit: (expenseId: string) => void;
  onDelete: (expenseId: string) => void;
  selectedId: string;
}

const ExpenseCard = ({ expense, onEdit, onDelete, selectedId }: Props) => {
  console.log(selectedId);
  const { id, description, amount, date, expenseParticipants } = expense;

  /* hover:border-0 border-accent-txt hover:bg-secondary hover:cursor-pointer  */
  return (
    <div className="p-1 sm:px-3 sm:py-1.5 hover:cursor-pointer hover:bg-primary mb-2">
      <div className="flex gap-3 justify-between items-center ">
        <div className="px-3 py-3 sm:px-4 sm:py-3 bg-secondary rounded-xl">
          <i className="fa fa-money" aria-hidden="true"></i>
        </div>
        <div className="w-50 sm:w-full">
          <p className="text-primary-txt text-md font-semibold truncate">
            {description}
          </p>
          <div className="flex items-end gap-x-2 mt-1 text-nowrap">
            <p className="text-accent-txt text-sm">${amount}</p>
            <span className="font-semibold">·</span>
            <p className="text-accent-txt text-sm">
              {expenseParticipants.length} Participants
            </p>
            <span className="font-semibold">·</span>
            <p className="text-accent-txt text-sm">{date}</p>
          </div>
        </div>
        <div
          className="ml-auto hover:cursor-pointer self-start sm:self-center"
          // onClick={() => onClickExpenseItem(expense.id)}
        >
          <span className="flex gap-x-2 mt-1 sm:gap-x-3">
            <i
              className="fa fa-pencil-square-o  pt-[1.1px]"
              aria-hidden="true"
              onClick={() => onEdit(id)}
            ></i>

            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => {
                onDelete(id);
              }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
