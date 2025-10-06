import type { Expense } from "../models/GroupModels";

interface Props {
  expense: Expense;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const tableHeaders: string[] = [
  "Participant",
  "Weight (%)",
  "Paid",
  "Owed",
  "IsOwed",
];

const SummaryCard = ({ expense, isOpen, onToggle }: Props) => {
  const { id, description, amount, expenseParticipants, date } = expense;

  const calculateParticipantData = () => {
    const totalWeight = expenseParticipants.reduce(
      (acc, participant) => acc + participant.weight,
      0
    );
    const totalAmount = amount || 0;

    return expenseParticipants.map((participant) => {
      const weightRatio =
        totalWeight > 0 ? participant.weight / totalWeight : 0;
      const owedAmount = weightRatio * totalAmount;
      const contribution = parseFloat(participant.contribution) || 0;

      const isOwed =
        contribution > owedAmount
          ? (contribution - owedAmount).toFixed(2)
          : "0.00";
      const owed =
        contribution < owedAmount
          ? (owedAmount - contribution).toFixed(2)
          : "0.00";

      return {
        ...participant,
        owedAmount: owed,
        isOwed,
      };
    });
  };

  return (
    <div className="p-1 sm:px-3 sm:py-1.5 hover:cursor-pointer mb-2">
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
              className={isOpen ? "fa fa-arrow-down" : "fa fa-arrow-right"}
              aria-hidden="true"
              onClick={() => {
                onToggle(id);
              }}
            ></i>
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="p-4">
          <div className="overflow-x-auto rounded-2xl shadow-md">
            <table className="min-w-full table-auto border border-gray-200 bg-accent-txt">
              <thead>
                <tr>
                  {tableHeaders.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-2 text-sm font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {calculateParticipantData().map((p) => (
                  <tr className=" px-4 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 text-sm">{p.name}</td>
                    <td className="px-4 py-2 text-sm">{p.weight}</td>
                    <td className="px-4 py-2 text-sm">{p.contribution}</td>
                    <td className="px-4 py-2 text-sm">{p.owedAmount}</td>
                    <td className="px-4 py-2 text-sm">{p.isOwed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
