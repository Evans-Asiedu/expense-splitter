import React, { useState } from "react";
import Button from "./Button";
import type { Group } from "../models/GroupModels";

interface GroupProps {
  group: Group;
}

const GroupCard = ({ group }: GroupProps) => {
  const { imageUrl, expenseList, participantList, name } = group;
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleDelete = () => {
    console.log("deleting group");
    setShowDialog(false);
  };

  return (
    <div className="w-full p-2 outline-1 outline-gray-400 rounded-md sm:flex flex-row-reverse justify-between mb-4">
      <img
        src={imageUrl}
        alt=""
        className="mb-2 rounded-md h-84 w-full sm:w-1/2 sm:h-48 md:w-1/3"
      />
      <div className="flex justify-between sm:block">
        <div className="text-sm sm:mb-3">
          <span className="mr-2">{expenseList.length} expenses</span>{" "}
          <span>{participantList.length} members</span>
          <h2 className="font-bold text-lg">{name}</h2>
        </div>
        <div className="flex gap-2">
          <Button
            name="view details"
            isPrimary={false}
            onClick={() => {}}
            type="button"
          />
          <Button
            name="Delete"
            onClick={() => setShowDialog(true)}
            isPrimary={true}
            color="bg-red-500 hover:bg-red-600"
            type="button"
          />
        </div>
      </div>

      {/* Confirmation Popup */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in">
          <div className="bg-white p-4 rounded-md shadow-md w-64 text-center">
            <p className="mb-4 font-medium">
              Are you sure you want to delete <br />{" "}
              <span className="font-bold">{name}</span>?
            </p>
            <div className="flex justify-around">
              <Button
                name="Cancel"
                isPrimary={false}
                onClick={() => setShowDialog(false)}
                type="button"
              />
              <Button
                name="Yes, Delete"
                isPrimary={true}
                color="bg-red-500 hover:bg-red-600"
                onClick={handleDelete}
                type="button"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupCard;
