import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import GroupCard from "../GroupCard";
import Header from "../Header";
import { getGroups } from "../../services/GroupService";
import type { Group } from "../../models/GroupModels";

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
      <div>
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupListPage;
