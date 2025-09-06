import React from "react";

import GroupForm from "../components/GroupForm";

const CreateGroupPage = () => {
  return (
    <div className="w-5/6 mx-auto sm:relative">
      <h1 className="text-4xl font-bold mb-4">Create a group</h1>
      <GroupForm />
    </div>
  );
};

export default CreateGroupPage;
