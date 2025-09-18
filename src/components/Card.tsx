interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = ({ imageUrl, title, description }: Props) => {
  return (
    <div className="my-4 w-5/6 mx-auto sm:mx-0 sm:w-60">
      <img src={imageUrl} alt="" className="rounded-xl" />
      <h2 className="mt-2 text-2xl font-bold">{title}</h2>
      <p className="text-md font-light text-accent-txt">{description}</p>
    </div>
  );
};

export default Card;
