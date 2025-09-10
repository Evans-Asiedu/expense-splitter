import React, { useState } from "react";

type Tab = "participants" | "expenses" | "summary";

const TabView = () => {
  const [activeTab, setActiveTab] = useState<Tab>("participants");

  const renderTabContent = () => {
    if (activeTab === "participants") return <div>Show ParticipantList</div>;

    if (activeTab === "expenses") return <div>Show Group Expenses</div>;

    return <div>Show Group Summary</div>;
  };

  return (
    <div>
      {/* Tab */}
      <div className="flex border-b border-gray-300">
        <button
          className={`flex-1 py-2 ${
            activeTab === "participants"
              ? "border-b-2 border-sky-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("participants")}
        >
          Participants
        </button>
        <button
          className={`flex-1 py-2 ${
            activeTab === "expenses"
              ? "border-b-2 border-sky-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("expenses")}
        >
          Expenses
        </button>
        <button
          className={`flex-1 py-2 ${
            activeTab === "summary"
              ? "border-b-2 border-sky-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
      </div>

      <div>{renderTabContent()}</div>
    </div>
  );
};

export default TabView;
