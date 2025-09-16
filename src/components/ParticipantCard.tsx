import React, { useState } from "react";
import type { Participant } from "./../models/GroupModels";

interface Props {
  participant: Participant;
}

const ParticipantCard = ({ participant }: Props) => {
  const [isAdmin] = useState<boolean>(false);
  const { name, overallStatus, totalAmountPaid, totalAmountToPay } =
    participant;

  return (
    <div className="flex gap-3 justify-between mt-2">
      <div className="rounded-full">
        <img
          src="https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png"
          alt=""
          className="rounded-full h-12 w-12"
        />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-md text-gray-500">
          2 expenses, ${totalAmountPaid - totalAmountToPay}
        </p>
      </div>
      <div className="ml-auto">
        <span className="block mb-1 bg-gray-400 px-2 py-0.5 rounded-xl text-sm">
          {overallStatus}
        </span>
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
