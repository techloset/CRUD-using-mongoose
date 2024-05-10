import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React from "react";

export default function page() {
  return (
    <form className="flex flex-col gap-3">
      <CustomInput type="text" placeholder="Blog Title" />
      <CustomInput type="text" placeholder="Blog Description" />

      <CustomButton title="Add Blog" />

      {/* <button className="bg-green-700 hover:bg-green-800 font-semibold text-white py-3 px-6 w-fit rounded-md">
        Add Blog
      </button> */}
    </form>
  );
}
