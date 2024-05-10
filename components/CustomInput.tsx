export interface InputProps {
  type: string;
  placeholder: string;
}

const CustomInput: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      className="border border-slate-500 rounded-md px-8 py-2"
      type={type}
      placeholder={placeholder}
    />
  );
};
export default CustomInput;
