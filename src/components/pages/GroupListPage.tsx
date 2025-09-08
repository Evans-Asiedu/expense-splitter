import React from "react";
import SearchBar from "../SearchBar";
import GroupCard from "../GroupCard";

const GroupListPage = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div>Group Details</div>
      <SearchBar value={""} onChange={() => {}} />
      <GroupCard />
    </div>
  );
};

export default GroupListPage;
