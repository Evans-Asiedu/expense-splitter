import GroupForm from "../GroupForm";
import Header from "../Header";
import SEO from "../SEO";

interface Props {
  onClose: () => void;
}

const CreateGroupPage = ({ onClose }: Props) => {
  return (
    <div className="p-4 border-1 bg-secondary-txt rounded-md">
      <SEO
        title="Create a New Group"
        description="Start a new expense group to easily split bills and track shared costs. Invite friends, set budgets, and keep spending transparent."
        keywords="create expense group, start group, split bills, shared expenses, expense tracker app"
      />

      <div className="flex justify-between">
        <Header title="Create a group" />
        <span
          className="self-start mt-2 hover:cursor-pointer"
          onClick={onClose}
        >
          <i className="fa fa-times fa-lg" aria-hidden="true"></i>
        </span>
      </div>
      <GroupForm onClose={onClose} />
    </div>
  );
};

export default CreateGroupPage;
