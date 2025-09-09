interface Props {
  name: string;
  onClick?: () => void;
  isPrimary: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ name, onClick, isPrimary, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className={`px-2 py-1 rounded-sm ${
        isPrimary
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
