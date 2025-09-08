import React from "react";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return <h2 className="text-3xl font-bold mb-4">{title}</h2>;
};

export default Header;
