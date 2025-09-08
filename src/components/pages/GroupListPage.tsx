import React from "react";
import SearchBar from "../SearchBar";
import GroupCard from "../GroupCard";
import Header from "../Header";

const GroupListPage = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Header title="Your Groups" />
      <SearchBar value={""} onChange={() => {}} />
      <GroupCard />
    </div>
  );
};

export default GroupListPage;
