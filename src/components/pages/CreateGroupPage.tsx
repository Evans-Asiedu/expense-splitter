import GroupForm from "../GroupForm";
import Header from "../Header";

const CreateGroupPage = () => {
  return (
    <div className="w-5/6 mx-auto sm:relative">
      <Header title="Create a group" />
      <GroupForm />
    </div>
  );
};

export default CreateGroupPage;
