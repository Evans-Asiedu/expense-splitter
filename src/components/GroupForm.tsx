import React, { useState } from "react";
import Button from "./Button";

const GroupForm = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   description: "",
  //   budget: "",
  //   currencey: "",
  // });

  // const [error, setError] = useState();

  const error = "";

  const currencies = [
    { value: "USD" },
    { value: "EUR" },
    { value: "GBP" },
    { value: "JPY" },
    { value: "AUD" },
    { value: "CAD" },
  ];

  // const handleSubmit = () => {

  // }

  return (
    <>
      <form action="" className="ms-2 sm:w-1/2">
        <label htmlFor="group_name">Group Name</label>
        <div className="mt-2 mb-10">
          <input
            id="group_name"
            name="group-name"
            type="text"
            placeholder="Enter group name"
            className="py-1 px-2 block w-full rounded-md outline-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:outline-2 focus:outline-sky-500"
          />
          {error && (
            <div className="mt-1 w-full h-8 rounded-md bg-red-400">{error}</div>
          )}
        </div>

        <label htmlFor="description">Description</label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Say something about the group"
            className="p-2 block w-full outline-1 outline-gray-300 rounded-md placeholder:text-gray-400 placeholder:text-sm focus:outline-2 focus:outline-sky-500"
          />
          {error && (
            <div className="mt-1 w-full h-8 rounded-md bg-red-400">{error}</div>
          )}
        </div>

        <div className="flex gap-6 mt-8">
          <div>
            <label htmlFor="budget">Allocated Budget</label>
            <div className="mt-2 mb-10">
              <input
                id="budget"
                name="budget"
                type="text"
                placeholder="Amount"
                className="py-1 px-2 block w-full outline-1 outline-gray-300 rounded-md placeholder:text-gray-400 placeholder:text-sm focus:outline-2 focus:outline-sky-500"
              />
              {error && (
                <div className="mt-1 w-full h-8 rounded-md bg-red-400">
                  {error}
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
                className="p-1 block w-full outline-1 outline-gray-300 rounded-md focus:outline-2 focus:outline-sky-500"
              >
                {currencies.map((currency) => (
                  <option value={currency.value}>{currency.value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4 sm:absolute sm:right-0  ">
          <Button name="Cancel" isPrimary={false} onClick={() => {}} />
          <Button name="Submit" isPrimary={true} onClick={() => {}} />
        </div>
      </form>
    </>
  );
};

export default GroupForm;
