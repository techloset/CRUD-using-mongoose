import React from "react";

export interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset";
  isLoading: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ title, type, isLoading }) => {
  return (
    <button
      className="bg-green-700 hover:bg-green-800 font-semibold text-white py-3 px-6 w-fit rounded-md"
      type={type}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white">
          Loading...
        </span>
      ) : (
        title
      )}
    </button>
  );
};

export default CustomButton;
