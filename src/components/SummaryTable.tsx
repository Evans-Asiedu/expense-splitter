import type { Expense } from "../models/GroupModels";

interface Props {
  expense: Expense;
}

const tableHeaders: string[] = [
  "Participant",
  "Weight (%)",
  "Paid",
  "Owed",
  "IsOwed",
];

const SummaryTable = ({ expense }: Props) => {
  const { amount, expenseParticipants } = expense;

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
    <div>
      <div className="p-4">
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="min-w-full table-fixed border border-gray-200 bg-accent-txt">
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-2 text-sm font-semibold text-left whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {calculateParticipantData().map((p) => (
                <tr key={p.name} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-sm whitespace-nowrap ">
                    {p.name}
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap ">
                    {p.weight}
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap">
                    {p.contribution}
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap">
                    {p.owedAmount}
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap">
                    {p.isOwed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryTable;
