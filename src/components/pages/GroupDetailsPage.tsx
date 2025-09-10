import React from "react";
import Header from "../Header";
import Button from "../Button";
import TabView from "../TabView";

const GroupDetailsPage = () => {
  return (
    <div className="w-5/6 mx-auto mt-3">
      <div className="flex justify-between">
        <Header title="New Zealand Trip" />
        <Button name="Settle up" isPrimary={false} type="button" />
      </div>
      <div>
        <p className="font-semibold">Group description</p>
        <div className="flex gap-x-2 text-sm text-gray-400 my-1">
          <span>7 People</span>
          <span>$50000 budget</span>
          <span>20 days</span>
        </div>
      </div>
      <div className="mt-3">
        <TabView />
      </div>
    </div>
  );
};

export default GroupDetailsPage;
