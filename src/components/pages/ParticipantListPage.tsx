// import React from "react";
import ParticipantCard from "../ParticipantCard";
import type { Participant } from "../../models/GroupModels";
import { getParticipants } from "../../services/ParticipantService";
import Button from "../Button";
import { useState } from "react";

interface Props {
  groupId: string;
}

const ParticipantListPage = ({ groupId }: Props) => {
  const participants: Participant[] = getParticipants(groupId);

  const [showForm, setShowForm] = useState(false);

  // add state forms

  return (
    <div>
      {participants.map((participant) => (
        <ParticipantCard key={participant.id} participant={participant} />
      ))}
      <div className="fixed bottom-2 right-16 m-4">
        <Button
          name="Add a participant"
          onClick={() => setShowForm(true)}
          isPrimary={false}
        />
      </div>

      {/*  Modal Overlay: add participant form */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)}
        >
          {/* Stop click from closing when clicking inside the dialog */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Add Participant</h2>
            <form onSubmit={() => {}} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                onChange={() => {}}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                onChange={() => {}}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => {}}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-sky-600 text-white rounded hover:bg-sky-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantListPage;
