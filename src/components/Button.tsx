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
      className={`px-2 py-1 rounded-sm ${
        color
          ? color
          : isPrimary
          ? "bg-sky-600 text-white hover:bg-sky-500"
          : "bg-gray-300 text-black hover:bg-gray-500"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
