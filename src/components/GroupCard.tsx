import React from "react";
import Button from "./Button";
import type { Group } from "../models/GroupModels";

interface GroupProps {
  group: Group;
}

const GroupCard = ({ group }: GroupProps) => {
  const { imageUrl, expenseList, participantList, name } = group;
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
        <Button
          name="view details"
          isPrimary={false}
          onClick={() => {}}
          type="button"
        />
      </div>
    </div>
  );
};

export default GroupCard;
