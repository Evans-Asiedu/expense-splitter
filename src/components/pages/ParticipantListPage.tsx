// import React from "react";
import ParticipantCard from "../ParticipantCard";
import type { Participant } from "../../models/GroupModels";
import { getParticipants } from "../../services/ParticipantService";

const ParticipantListPage = () => {
  const participants: Participant[] = getParticipants("g1");

  return (
    <div>
      {participants.map((participant) => (
        <ParticipantCard key={participant.id} participant={participant} />
      ))}
    </div>
  );
};

export default ParticipantListPage;
