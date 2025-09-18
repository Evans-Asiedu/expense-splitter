interface Props {
  name: string;
  onClick?: () => void;
  isPrimary: boolean;
  type?: "button" | "submit" | "reset";
  color?: string;
}

const Button = ({
  name,
  onClick,
  isPrimary,
  color,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      className={`px-3 py-1.5 rounded-xl ${
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
