import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React from "react";

export default function page() {
  return (
    <form className="flex flex-col gap-3">
      <CustomInput type="text" placeholder="Edit your Blog Title" />
      <CustomInput type="text" placeholder="Blog your Description" />

      <CustomButton title="Edit your blog" />
    </form>
  );
}
