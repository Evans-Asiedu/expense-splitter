import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="relative mb-5">
      <input
        id="search"
        name="search"
        value={value}
        onChange={onChange}
        type="text"
        className="w-full my-3 px-10 py-2 rounded-md bg-secondary outline-0 focus:outline-2 focus:outline-primary"
      />
      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
        <i className="fa fa-search" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default SearchBar;
