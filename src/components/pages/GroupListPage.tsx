import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Header from "../Header";
import { getGroups } from "../../services/GroupService";
import type { Group } from "../../models/GroupModels";
import GroupList from "../GroupList";
import ConfirmDialog from "../ConfirmDialog";

const GroupListPage = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);

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

  // need to be properly named
  const onDeleteCall = (groupId: string) => {
    setIsConfirmDialogOpen(true);
    console.log(groupId);
  };

  return (
    <div className="w-5/6 mx-auto">
      <Header title="Your Groups" />
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <GroupList groups={filteredGroups} onDeleteGroupItem={onDeleteCall} />
      <div>
        {isConfirmDialogOpen && (
          <ConfirmDialog
            name="confirmation"
            onCancel={() => {
              setIsConfirmDialogOpen(false);
            }}
            onDelete={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default GroupListPage;
