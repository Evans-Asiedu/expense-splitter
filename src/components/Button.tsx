interface Props {
  name: string;
  onClick?: () => void;
  isPrimary: boolean;
  type?: "button" | "submit" | "reset";
  color?: string;
  rounded?: boolean;
}

const Button = ({
  name,
  onClick,
  isPrimary,
  color,
  rounded,
  type = "button",
}: Props) => {
  if (rounded) {
    return (
      <button
        type={type}
        className={`px-3.5 py-1 text-md rounded-full  hover:cursor-pointer transition-colors duration-300 ease-in-out ${
          color
            ? color
            : isPrimary
            ? "bg-primary text-secondary-txt hover:bg-sky-500"
            : "bg-secondary text-primary-text hover:bg-gray-500 outline-1"
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`px-3 py-1.5 rounded-xl  hover:cursor-pointer transition-colors duration-300 ease-in-out ${
        color
          ? color
          : isPrimary
          ? "bg-primary text-secondary-txt hover:bg-sky-500"
          : "bg-secondary text-primary-text hover:bg-gray-500"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
