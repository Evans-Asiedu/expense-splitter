import React from "react";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = ({ imageUrl, title, description }: Props) => {
  return (
    <div className="w-4/6 mx-auto my-4">
      <img src={imageUrl} alt="" className="rounded-xl" />
      <h2 className="my-2 text-2xl font-bold font-black">{title}</h2>
      <p className="text-md font-light">{description}</p>
    </div>
  );
};

export default Card;
