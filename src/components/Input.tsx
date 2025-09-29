interface Props {
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}
const Input = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  onFocus,
  className,
}: Props) => {
  return (
    <div className="mt-2 mb-7 ">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`py-1 px-2 w-full rounded-md outline-1 outline-gray-300 placeholder:text-accent-txt placeholder:text-sm focus:outline-2 focus:outline-primary ${className}`}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
