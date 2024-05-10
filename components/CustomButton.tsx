export interface ButtonProps {
  title: string;
}
const CustomButton: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="bg-green-700 hover:bg-green-800 font-semibold text-white py-3 px-6 w-fit rounded-md">
      {title}
    </button>
  );
};
export default CustomButton;
