"use client";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useEditBlog from "@/hooks/useEditBlog";
import React from "react";

export default function EditForm({ id, title, description }: any) {
  console.log("Title:", title, "Description:", description);

  const {
    isLoading,
    handleDescriptionChange,
    handleTitleChange,
    handleSubmit,
    newTitle,
    newDescription,
  } = useEditBlog({ id, title, description });

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        placeholder="Blog Title"
        value={newTitle}
        onChange={handleTitleChange}
      />
      <CustomInput
        type="text"
        placeholder="Blog Description"
        value={newDescription}
        onChange={handleDescriptionChange}
      />

      <CustomButton
        title={isLoading ? "Updating Blog..." : "Update Blog"}
        type="submit"
        isLoading={isLoading}
      />
    </form>
  );
}
