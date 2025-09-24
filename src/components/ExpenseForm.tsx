import type { Expense } from "../models/GroupModels";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

interface Props {
  groupId: string;
  onExpenseAdded: () => void;
  onClose: () => void;
  expense?: Expense;
}

const ExpenseForm = ({ groupId, onExpenseAdded, onClose, expense }: Props) => {
  console.log(groupId, onExpenseAdded, onClose, expense);

  return (
    <div className="w-full p-4 fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="p-4 border-2 bg-secondary-txt rounded-md
                    max-h-[80vh] overflow-y-auto"
      >
        <Header title="Add Expense" />
        <form action="" className="relative">
          <Input
            name="name"
            type="text"
            value=""
            onChange={() => {}}
            placeholder="Name"
          />

          <Input
            name="amount"
            type="number"
            value=""
            onChange={() => {}}
            placeholder="Amount"
          />

          <div className="">
            <textarea
              name="description"
              rows={3}
              value=""
              onChange={() => {}}
              placeholder="Description"
              className="p-2 block w-full outline-1 outline-gray-300 rounded-md placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary"
            />
          </div>

          <div className="my-5 outline-0">
            <input
              name="splitevenly"
              type="checkbox"
              value=""
              onChange={() => {}}
              className="mr-3 rounded-md outline-1 outline-gray-300 focus:outline-2 focus:outline-primary"
            />
            <label htmlFor="">Split evenly among Participant</label>
          </div>

          <div>
            <label htmlFor="">Participants</label>
            <div className="flex items-start gap-x-3">
              <Input
                name="participantName"
                type="text"
                value=""
                onChange={() => {}}
                placeholder="Participant Name"
              />
              <Input
                name="contributedAmount"
                type="number"
                value=""
                onChange={() => {}}
                placeholder="Contributed Amount"
              />
              <span className="pt-1.5">
                <Button name="Add" isPrimary={true} />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="">Receipt</label>
            <Input
              name="receipt"
              type="file"
              value=""
              onChange={() => {}}
              placeholder=""
            />
          </div>

          <div className="flex gap-2 mt-4">
            <Button name="cancel" isPrimary={false} />
            <Button name="save" isPrimary={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
