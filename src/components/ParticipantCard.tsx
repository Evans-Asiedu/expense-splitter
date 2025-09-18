import { useState } from "react";
import type { Participant } from "./../models/GroupModels";

interface Props {
  participant: Participant;
  onDelete: (id: string) => void;
}

const ParticipantCard = ({ participant, onDelete }: Props) => {
  const [isAdmin] = useState<boolean>(false);
  const { id, name, overallStatus, totalAmountPaid, totalAmountToPay } =
    participant;

  return (
    <div className="flex gap-3 justify-between mb-4">
      <div className="rounded-full">
        <img
          src="https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png"
          alt=""
          className="rounded-full h-12 w-12"
        />
      </div>
      <div>
        <div className="flex items-center">
          <p className="font-semibold mr-4">{name}</p>
          <span className="bg-gray-400 px-2 py-1 rounded-xl text-xs">
            {overallStatus}
          </span>
        </div>
        <p className="text-sm text-gray-500">
          2 expenses, ${totalAmountPaid - totalAmountToPay}
        </p>
      </div>
      <div className="ml-auto">
        <i
          className="fa fa-trash-o hover:cursor-pointer"
          onClick={() => onDelete(id)}
          aria-hidden="true"
        ></i>
        {isAdmin && (
          <span className="bg-green-400 px-2 py-0.5 rounded-xl text-sm">
            admin
          </span>
        )}
      </div>
    </div>
  );
};

export default ParticipantCard;
