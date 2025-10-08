import { useEffect, useState } from "react";
import type { Expense } from "../models/GroupModels";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

type Participant = {
  id: string;
  name: string;
  contribution: string;
  avatarUrl: string;
  weight: number;
};

export type ExpenseData = {
  id: string;
  name: string;
  description: string;
  date: string;
  receipt: string;
  amount: number;
  expenseParticipants: Participant[];
};

type errorData = {
  name: string;
  message: string;
};

interface Props {
  onSubmit: (expense: ExpenseData) => void;
  onClose: () => void;
  expense?: Expense | null;
}

const ExpenseForm = ({ onSubmit, onClose, expense }: Props) => {
  //console.log(groupId);

  const [formData, setFormData] = useState<ExpenseData>({
    id: "",
    name: "",
    description: "",
    date: "",
    receipt: "",
    amount: 0,
    expenseParticipants: [],
  });
  const [splitEvenly, setSplitEvenly] = useState<boolean>(true);
  const [participantName, setParticipantName] = useState<string>("");
  const [participantContribution, setParticipantContribution] =
    useState<string>("");
  const [splitEvenWeight, setSplitEvenWeight] = useState<number>(100);

  const [error, setError] = useState<errorData>({
    name: "",
    message: "",
  });

  const handleSplitWeightEvenly = () => {
    const value =
      formData.expenseParticipants.length > 0
        ? 100 / formData.expenseParticipants.length
        : 100;

    setSplitEvenWeight(Number(value.toFixed(2)));
  };

  useEffect(() => {
    // handleSplitWeightEvenly();
    const value =
      formData.expenseParticipants.length > 0
        ? 100 / formData.expenseParticipants.length
        : 100;

    setSplitEvenWeight(Number(value.toFixed(2)));
  }, [formData.expenseParticipants]);

  useEffect(() => {
    if (expense) {
      setFormData({
        id: expense.id,
        name: expense.name,
        description: expense.description,
        date: expense.date,
        receipt: expense.receipt,
        amount: expense.amount,
        expenseParticipants: [...expense.expenseParticipants],
      });
    }

    //  handleSplitWeightEvenly();
  }, [expense]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, amount, expenseParticipants, receipt, description } =
      formData;

    if (!name.trim()) {
      setError({
        name: "name",
        message: "Expense name is required",
      });

      return;
    }

    if (!amount) {
      setError({ name: "amount", message: "expense amount is required" });
      return;
    }

    const expenseAmount = Number(amount);
    if (expenseAmount <= 0 || isNaN(expenseAmount)) {
      setError({
        name: "amount",
        message: "amount must be a valid value and greater than 0",
      });
      return;
    }

    // updated participant list;
    const updatedParticipants = expenseParticipants.map((participant) => {
      return {
        ...participant,
        weight: splitEvenly ? splitEvenWeight : participant.weight,
      };
    });

    const newExpense: ExpenseData = {
      id: expense ? expense.id : Date.now().toString(),
      name: name,
      description: description,
      date: new Date(Date.now()).toISOString().split("T")[0],
      receipt: receipt ? receipt : expense?.receipt || "",
      amount: expenseAmount,
      expenseParticipants: updatedParticipants,
    };

    onSubmit(newExpense);
    onClose();
  };

  const handleWeightChange = (index: number, value: number) => {
    if (value > 100 || value < 0) {
      value = value < 0 ? 0 : 100;
    }

    const updatedParticipants = formData.expenseParticipants;
    updatedParticipants[index].weight = value;
    setFormData((prev) => ({
      ...prev,
      expenseParticipants: updatedParticipants,
    }));
  };

  const handleReceiptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFormData((prev) => ({
      ...prev,
      receipt: file ? file.name : "",
    }));
  };

  const addParticipant = () => {
    if (!participantName.trim() || participantName.length <= 2) {
      setError({
        name: "participantName",
        message: "Person's name is required and must be more two characters",
      });
      return;
    }

    if (!participantContribution || isNaN(Number(participantContribution))) {
      setError({
        name: "contributedAmount",
        message: "Contribution must be a valid number",
      });
      return;
    }

    if (Number(participantContribution) < 0) {
      setError({
        name: "contributedAmount",
        message: "Contribution cannot be a negative value",
      });

      return;
    }

    setError({ name: "", message: "" });

    console.log("new particpants");
    console.log(participantName, participantContribution);

    const newParticipant: Participant = {
      id: Date.now().toString(),
      name: participantName,
      contribution: participantContribution,
      weight: 0,
      avatarUrl:
        "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
    };

    console.log("new partnicipant", newParticipant);

    setFormData((prev) => ({
      ...prev,
      expenseParticipants: [...prev.expenseParticipants, newParticipant],
    }));

    setParticipantName("");
    setParticipantContribution("");
  };

  const removeParticipant = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      expenseParticipants: prev.expenseParticipants.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        name: value,
      }));
    }

    if (name === "amount") {
      setFormData((prev) => ({
        ...prev,
        amount: Number(value),
      }));
    }

    if (name === "description") {
      setFormData((prev) => ({
        ...prev,
        description: value,
      }));
    }
  };

  const handleFocus = () => {
    setError({ name: "", message: "" });
  };

  return (
    <div className="w-full p-4 fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="p-4 border-2 bg-secondary-txt rounded-md
                    max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between">
          <Header title={expense ? "Edit Expense" : "Add Expense"} />
          <span
            className="self-start mt-2 hover:cursor-pointer"
            onClick={onClose}
          >
            <i className="fa fa-times fa-lg" aria-hidden="true"></i>
          </span>
        </div>
        <form action="" onSubmit={handleSubmit} className="mt-7">
          <div>
            {error.name === "name" && (
              <div className="bg-red-300 p-1 text-sm">{error.message}</div>
            )}
          </div>
          <Input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            onFocus={handleFocus}
          />

          <div>
            {error.name === "amount" && (
              <div className="bg-red-300 p-1 text-sm">{error.message}</div>
            )}
          </div>
          <Input
            name="amount"
            type="number"
            value={formData.amount ? formData.amount.toString() : ""}
            onChange={handleInputChange}
            placeholder="Amount"
            onFocus={handleFocus}
          />

          <div className="">
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-2 block w-full outline-1 outline-gray-300 rounded-md placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary"
            />
          </div>

          <div className="my-5 outline-0">
            <input
              name="splitevenly"
              type="checkbox"
              checked={splitEvenly}
              onChange={() => {
                handleSplitWeightEvenly();
                setSplitEvenly(!splitEvenly);
              }}
              className="mr-3 rounded-md outline-1 outline-gray-300 focus:outline-2 focus:outline-primary"
            />
            <label htmlFor="">Split evenly among Participant</label>
          </div>

          <div>
            <label htmlFor="" className="text-lg font-semibold">
              Participants
            </label>
            <div>
              {formData.expenseParticipants.map((participant, index) => (
                <div className="px-2 pt-2 pb-6 border-b-1 border-b-gray-300 flex items-start">
                  <span className="h-12 w-12 mr-3">
                    <img
                      src={participant.avatarUrl}
                      alt=""
                      className="rounded-full"
                    />
                  </span>
                  <div className="text-xs h-12 ">
                    <p className="font-bold">{participant.name}</p>
                    <p>Contribution: $ {participant.contribution}</p>
                    {splitEvenly ? (
                      <p>Weight (%): {splitEvenWeight}</p>
                    ) : (
                      <div className="flex gap-x-2 items-center">
                        <p className="h-1">Weight (%): </p>
                        <div className="w-14 h-6">
                          <Input
                            name="contribution"
                            type="number"
                            value={participant.weight.toString()}
                            placeholder="weight"
                            onChange={(e) => {
                              handleWeightChange(index, Number(e.target.value));
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <span
                    className="ml-auto hover:cursor-pointer"
                    onClick={() => removeParticipant(index)}
                  >
                    <i
                      className="fa fa-times text-red-400"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              ))}
            </div>
            <div>
              {["participantName", "contributedAmount"].includes(
                error.name
              ) && (
                <div className="bg-red-300 p-1 text-sm">{error.message}</div>
              )}
            </div>
            <div className="flex items-start gap-x-3 mt-1">
              <Input
                name="participantName"
                type="text"
                value={participantName}
                onChange={(e) => {
                  setParticipantName(e.target.value);
                }}
                placeholder="Participant Name"
                onFocus={handleFocus}
              />
              <Input
                name="contributedAmount"
                type="number"
                value={participantContribution}
                onChange={(e) => {
                  setParticipantContribution(e.target.value);
                }}
                placeholder="Contributed Amount"
                onFocus={handleFocus}
              />
              <span className="pt-1.5">
                <Button
                  name="Add"
                  isPrimary={true}
                  type="button"
                  onClick={addParticipant}
                />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="">Receipt</label>
            <Input
              name=""
              type="file"
              onChange={handleReceiptChange}
              placeholder=""
              className="file:border-1 file:border-black-200 file:px-2 file:mr-4"
            />
          </div>

          <div className="flex gap-2 mt-4">
            <Button name="Cancel" isPrimary={false} onClick={onClose} />
            <Button
              name={expense ? "Update" : "Save"}
              isPrimary={true}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
