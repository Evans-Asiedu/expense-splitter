import type { Expense } from "../models/GroupModels";
import SummaryTable from "./SummaryTable";

interface Props {
  expense: Expense;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const SummaryCard = ({ expense, isOpen, onToggle }: Props) => {
  const { id, description, amount, expenseParticipants, date } = expense;

  return (
    <div
      className="p-2 sm:px-3 sm:py-1.5 hover:cursor-pointer hover:bg-secondary hover:rounded-xl mb-2"
      onClick={() => {
        onToggle(id);
      }}
    >
      <div className="flex gap-3 justify-between items-center ">
        <div className="px-3 py-3 sm:px-4 sm:py-3 bg-accent-txt rounded-xl">
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
              className={isOpen ? "fa fa-arrow-down" : "fa fa-arrow-right"}
              aria-hidden="true"
              onClick={() => {
                onToggle(id);
              }}
            ></i>
          </span>
        </div>
      </div>

      {isOpen && <SummaryTable expense={expense} />}
    </div>
  );
};

export default SummaryCard;
