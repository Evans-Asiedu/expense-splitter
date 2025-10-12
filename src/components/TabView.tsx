import { useState } from "react";
//import ParticipantListPage from "./pages/ParticipantListPage";
import ExpensesPage from "./pages/ExpensesPage";
import SummaryPage from "./pages/SummaryPage";

type Tab = "participants" | "expenses" | "summary";

interface Props {
  groupId: string;
}

const TabView = ({ groupId }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>("expenses");
  const [fade, setFade] = useState("fade-in");

  const handleTabChange = (tab: Tab) => {
    if (tab !== activeTab) {
      // Trigger fade out
      setFade("fade-out");
      setTimeout(() => {
        setActiveTab(tab);
        setFade("fade-in");
      }, 300); // Match fade-out duration
    }
  };

  const renderTabContent = () => {
    // if (activeTab === "participants")
    //   return (
    //     <div>
    //       <ParticipantListPage groupId={groupId} />
    //     </div>
    //   );

    if (activeTab === "expenses")
      return (
        <div>
          <ExpensesPage groupId={groupId} />
        </div>
      );

    if (activeTab === "summary")
      return (
        <div>
          <SummaryPage groupId={groupId} />
        </div>
      );

    return null;
  };

  return (
    <div>
      {/* Tab */}
      <div className="flex border-b border-gray-300 mb-2">
        {/* <button
          className={`flex-1 py-2 ${
            activeTab === "participants"
              ? "border-b-2 border-sky-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("participants")}
        >
          Participants
        </button> */}
        <button
          className={`flex-1 py-2 transition-all duration-300 ${
            activeTab === "expenses"
              ? "border-b-2 border-sky-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("expenses")}
        >
          Expenses
        </button>
        <button
          className={`flex-1 py-2 transition-all duration-300 ${
            activeTab === "summary"
              ? "border-b-2 border-sky-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("summary")}
        >
          Summary
        </button>
      </div>

      <div key={activeTab} className={`${fade}`}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabView;
