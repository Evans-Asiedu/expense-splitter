import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Header from "../Header";
import { getGroups } from "../../services/GroupService";
import type { Group } from "../../models/GroupModels";
import GroupList from "../GroupList";

const GroupListPage = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    const data = getGroups();
    setGroups(data);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLocaleLowerCase().includes(debouncedQuery.toLocaleLowerCase())
  );

  return (
    <div className="w-5/6 mx-auto">
      <Header title="Your Groups" />
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <GroupList groups={filteredGroups} />
    </div>
  );
};

export default GroupListPage;
