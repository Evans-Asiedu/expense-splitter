interface Props {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}
const Input = ({ name, type, value, placeholder, onChange }: Props) => {
  return (
    <div className="mt-2 mb-7 ">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-1 px-2 w-full rounded-md outline-1 outline-gray-300 placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary"
      />
    </div>
  );
};

export default Input;
