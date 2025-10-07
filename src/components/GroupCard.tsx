// import { useState } from "react";
import Button from "./Button";
import type { Group } from "../models/GroupModels";
import { useNavigate } from "react-router-dom";

interface GroupProps {
  group: Group;
  onDelete: (groupId: string) => void;
}

const GroupCard = ({ group, onDelete }: GroupProps) => {
  const { imageUrl, expenseList, participantList, name } = group;
  // const [showDialog, setShowDialog] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/groups/${group.id}`);
  };

  // const handleDelete = () => {
  //   console.log("deleting group");
  //   setShowDialog(false);
  // };

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
            name="View"
            isPrimary={false}
            onClick={handleViewClick}
            type="button"
          />
          <Button
            name="Delete"
            onClick={() => onDelete(group.id)}
            isPrimary={true}
            color="bg-red-300 hover:bg-red-400"
            type="button"
          />
        </div>
      </div>

      {/* Confirmation Popup */}
      {/* {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/75">
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
                color="bg-red-300 hover:bg-red-400"
                onClick={handleDelete}
                type="button"
              />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default GroupCard;
