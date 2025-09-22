import { useState } from "react";
import type { Expense } from "../models/GroupModels";

interface Props {
  expense: Expense;
}

const ExpenseCard = ({ expense }: Props) => {
  const { description, expenseParticipants } = expense;

  const [showDetials, setShowDetails] = useState<boolean>(false);

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
          <p className="text-accent-txt text-sm ">
            {expenseParticipants.length} Participants
          </p>
        </div>
        <div
          className="ml-auto hover:cursor-pointer"
          onClick={() => setShowDetails(!showDetials)}
        >
          <i
            className={
              showDetials ? "fa fa-chevron-down" : "fa fa-chevron-right"
            }
            aria-hidden="true"
          ></i>
        </div>
      </div>
      {showDetials && (
        <div className="mb-1 bg-secondary">
          <div>Allow for edit</div>
        </div>
      )}
    </div>
  );
};

export default ExpenseCard;
