import Button from "./Button";

interface Props {
  name: string;
  onCancel: () => void;
  onDelete: () => void;
}

const ConfirmDialog = ({ name, onCancel, onDelete }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md w-64 text-center">
        <p className="mb-4 font-medium">
          Are you sure you want to delete <br />{" "}
          <span className="font-bold">{name}</span>?
        </p>
        <div className="flex justify-around">
          <Button
            name="Cancel"
            isPrimary={false}
            onClick={onCancel}
            type="button"
          />
          <Button
            name="Yes, Delete"
            isPrimary={true}
            color="bg-red-300 hover:bg-red-400"
            onClick={onDelete}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
