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
        "https://cdn.pixabay.com/photo/2024/01/29/08/54/hot-air-balloon-8539287_960_720.png",
    },
    {
      title: "Family",
      description: "Split holidays and vacations",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/07/27/03/37/travel-9737850_960_720.jpg",
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
