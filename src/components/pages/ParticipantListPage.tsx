// import React from "react";
import ParticipantCard from "../ParticipantCard";
import type { Participant } from "../../models/GroupModels";
import {
  addParticipant,
  deleteParticipant,
  getParticipants,
} from "../../services/ParticipantService";
import Button from "../Button";
import { useEffect, useState } from "react";

interface Props {
  groupId: string;
}

const ParticipantListPage = ({ groupId }: Props) => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
  const [participantToDelete, setParticipantToDelete] = useState<string | null>(
    null
  );

  useEffect(() => {
    setParticipants(getParticipants(groupId));
  }, [groupId]);

  // add state forms
  const [data, setData] = useState<Participant>({
    id: Date.now().toString(),
    name: "",
    overallPercentageContribution: 0,
    totalAmountPaid: 0,
    totalAmountToPay: 0,
    overallStatus: "settled",
  });

  const handleSubmit = () => {
    // validate input
    if (!data.name.trim()) {
      return;
    }

    setShowForm(false);

    console.log("Form submitted", data);
    // TODO: send data to state management
    addParticipant(groupId, data);
    setParticipants(getParticipants(groupId));
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setData((prev) => ({ ...prev, name: "" }));
    setShowForm(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const confirmDelete = (id: string) => {
    setShowConfirmDialog(true);
    setParticipantToDelete(id);
  };

  const handleDeleteConfirmed = () => {
    if (!participantToDelete) return;
    deleteParticipant(groupId, participantToDelete);

    setParticipants((prev) => prev.filter((p) => p.id !== participantToDelete));
    setShowConfirmDialog(false);
    setParticipantToDelete(null);
  };

  const handleDeleteCancel = () => {
    setShowConfirmDialog(false);
    setParticipantToDelete(null);
  };

  return participants.length !== 0 ? (
    <div>
      {participants.map((participant) => (
        <div>
          <ParticipantCard
            key={participant.id}
            participant={participant}
            onDelete={confirmDelete}
          />
        </div>
      ))}
      <div className="fixed bottom-2 right-16 m-4">
        <Button
          name="Add Participant"
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
            <form onSubmit={handleSubmit} action="" className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="reset"
                  onClick={handleCancel}
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

      {/*confirmation dialog */}
      {showConfirmDialog && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={handleDeleteCancel}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">
              Are you sure you want to delete this participant?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleDeleteCancel}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirmed}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>No Particiapant has been added yet</div>
  );
};

export default ParticipantListPage;
