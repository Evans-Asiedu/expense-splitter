import React from "react";
import Button from "./Button";

const GroupCard = () => {
  return (
    <div className="w-full p-2 outline-1 outline-gray-400 rounded-md sm:flex flex-row-reverse justify-between">
      <img
        src="https://cdn.usegalileo.ai/sdxl10/3a4bc566-a2f9-40bb-b275-3a348f14e5f6.png"
        alt=""
        className="mb-2 rounded-md h-84 w-full sm:w-1/2 sm:h-48 md:w-1/3"
      />
      <div className="flex justify-between sm:block">
        <div className="text-sm sm:mb-3">
          <span className="mr-2">12 expenses</span> <span>3 members</span>
          <h2 className="font-bold text-lg">Household</h2>
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
