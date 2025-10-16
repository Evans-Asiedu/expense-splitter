import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Header from "../Header";
import GroupList from "../GroupList";
import ConfirmDialog from "../ConfirmDialog";
import { Modal } from "../Modal";
import SEO from "../SEO";
import { useGroups } from "../../context/GroupContext";

const GroupListPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);
  const [groupId, setGroupId] = useState<string>("");
  const { deleteGroup, groups } = useGroups();

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
    setGroupId(groupId);
  };

  const handleConfirmDelete = () => {
    deleteGroup(groupId);
    setIsConfirmDialogOpen(false);
  };

  return (
    <div className="w-5/6 mx-auto">
      <SEO
        title="My Groups"
        description="View and manage all your expense groups in one place. Track shared spending, balances, and contributions with your friends or teams."
      />

      <Header title="Your Groups" />
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <GroupList groups={filteredGroups} onDeleteGroupItem={onDeleteCall} />
      <Modal
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
      >
        <ConfirmDialog
          name="confirmation"
          onCancel={() => {
            setIsConfirmDialogOpen(false);
          }}
          onDelete={handleConfirmDelete}
        />
      </Modal>
    </div>
  );
};

export default GroupListPage;
