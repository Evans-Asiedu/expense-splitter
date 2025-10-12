import GroupForm from "../GroupForm";
import Header from "../Header";

interface Props {
  onClose: () => void;
}

const CreateGroupPage = ({ onClose }: Props) => {
  return (
    <div className="p-4 border-1 bg-secondary-txt rounded-md">
      <div className="flex justify-between">
        <Header title="Create a group" />
        <span
          className="self-start mt-2 hover:cursor-pointer"
          onClick={onClose}
        >
          <i className="fa fa-times fa-lg" aria-hidden="true"></i>
        </span>
      </div>
      <GroupForm />
    </div>
  );
};

export default CreateGroupPage;
