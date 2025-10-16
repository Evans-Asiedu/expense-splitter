import React, { useState } from "react";
import Button from "./Button";
import type { Expense, Participant, Receipt } from "../models/GroupModels";
import { useNavigate } from "react-router-dom";
import { useGroups } from "../context/GroupContext";

type GroupData = {
  id: string;
  name: string;
  description: string;
  budget: number;
  totalExpenses: number;
  expensesCount: number;
  imageUrl: string;
  participants: Participant[];
  expenses: Expense[];
  receipts: Receipt[];
};

type errorData = {
  name: string;
  message: string;
};

interface Props {
  onClose: () => void;
}

const GroupForm = ({ onClose }: Props) => {
  const [data, setData] = useState<GroupData>({
    name: "",
    description: "",
    budget: 0,
    id: Date.now().toString(),
    totalExpenses: 0,
    expensesCount: 0,
    participants: [],
    expenses: [],
    receipts: [],
    imageUrl:
      "https://cdn.usegalileo.ai/stability/729e7a19-9450-4e5a-a795-fb4ccb57f91a.png",
  });

  const navigateTo = useNavigate();

  const [error, setError] = useState<errorData>();

  const currencies = [
    { value: "USD" },
    { value: "EUR" },
    { value: "GBP" },
    { value: "JPY" },
    { value: "AUD" },
    { value: "CAD" },
  ];

  const { addGroup } = useGroups();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate input
    if (!data.name.trim()) {
      setError({
        name: "name",
        message: "Group name is required",
      });
      return;
    }

    const budgetValue = Number(data.budget);

    if (!data.budget || isNaN(budgetValue)) {
      setError({
        name: "budget",
        message: "Value must be valid number & non zero",
      });
      return;
    }

    if (budgetValue <= 0) {
      setError({ name: "budget", message: "Budget must be greater than 0" });
      return;
    }

    setError({ name: "", message: "" }); // clear any errors

    console.log("Form submitted", data);

    addGroup(data);
    onClose();
    navigateTo(`/groups`);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = () => {
    setError({ name: "", message: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="px-2">
        <label htmlFor="name">Group Name</label>
        <div className="mt-2 mb-10">
          <input
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Enter group name"
            className="py-1 px-2 block w-full rounded-md outline-1 outline-gray-300 placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary"
          />
          {error?.name == "name" && (
            <div className="mt-1 w-full h-8 rounded-md bg-red-300 text-secondary-txt text-sm flex items-center px-2">
              {error?.message}
            </div>
          )}
        </div>

        <label htmlFor="description">Description</label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={3}
            value={data.description}
            onChange={handleChange}
            placeholder="Say something about the group"
            className="p-2 block w-full outline-1 outline-gray-300 rounded-md placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary"
          />
        </div>

        <div className="flex gap-6 mt-8">
          <div>
            <label htmlFor="budget">Allocated Budget</label>
            <div className="mt-2 mb-10">
              <input
                id="budget"
                name="budget"
                type="text"
                value={data.budget}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Amount"
                className="py-1 px-2 block w-full outline-1 outline-gray-300 rounded-md placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary"
              />
              {error?.name == "budget" && (
                <div className="mt-1 w-full h-8 rounded-md bg-red-300  text-secondary-txt text-sm flex items-center px-2">
                  {error?.message}
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="currencies">Currency</label>
            <div className="mt-2 mb-10 ">
              <select
                name="currencies"
                id="currencies"
                className="p-1 block w-full outline-1 outline-gray-300 rounded-md focus:outline-2 focus:outline-primary"
                value={"USD"}
                onChange={handleChange}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            name="Cancel"
            isPrimary={false}
            type="reset"
            onClick={() => {
              setData((prev) => ({
                ...prev,
                name: "",
                description: "",
                budget: 0,
              }));

              onClose();
            }}
          />
          <Button name="Create Group" isPrimary={true} type="submit" />
        </div>
      </form>
    </>
  );
};

export default GroupForm;
