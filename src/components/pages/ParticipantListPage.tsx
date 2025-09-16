// import React from "react";
import ParticipantCard from "../ParticipantCard";
import type { Participant } from "../../models/GroupModels";
import { getParticipants } from "../../services/ParticipantService";
import Button from "../Button";

interface Props {
  groupId: string;
}

const ParticipantListPage = ({ groupId }: Props) => {
  const participants: Participant[] = getParticipants(groupId);

  return (
    <div>
      {participants.map((participant) => (
        <ParticipantCard key={participant.id} participant={participant} />
      ))}
      <div className="fixed bottom-2 right-16 m-4">
        <Button name="Add a participant" onClick={() => {}} isPrimary={false} />
      </div>
    </div>
  );
};

export default ParticipantListPage;
