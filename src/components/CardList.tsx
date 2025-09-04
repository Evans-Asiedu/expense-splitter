import React from "react";
import Card from "./Card";

const CardList = () => {
  const cards = [
    {
      title: "Roommates",
      description: "Split rent, utilities, and groceries",
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/3a4bc566-a2f9-40bb-b275-3a348f14e5f6.png",
    },
    {
      title: "Friends",
      description: "Share meals, gifts, and travel",
      imageUrl:
        "https://cdn.usegalileo.ai/stability/ee2b6b86-f13f-487a-b26d-6ef178ea9929.png",
    },
    {
      title: "Couples",
      description: "Even out date nights and trips",
      imageUrl:
        "https://cdn.usegalileo.ai/stability/de34bada-e604-4bdb-b117-f72b392821a0.png",
    },
    {
      title: "Family",
      description: "Split holidays and vacations",
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/3a4bc566-a2f9-40bb-b275-3a348f14e5f6.png",
    },
  ];

  return (
    <div className="w-5/6 mx-auto flex flex-wrap justify-between">
      {cards.map((card) => (
        <Card
          key={card.title}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
