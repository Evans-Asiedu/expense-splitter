import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Header from "../Header";
import { getGroups } from "../../services/GroupService";
import type { Group } from "../../models/GroupModels";
import GroupList from "../GroupList";

const GroupListPage = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const data = getGroups();
    setGroups(data);
  }, []);

  return (
    <div className="w-5/6 mx-auto">
      <Header title="Your Groups" />
      <SearchBar value={""} onChange={() => {}} />
      <GroupList groups={groups} />
    </div>
  );
};

export default GroupListPage;
