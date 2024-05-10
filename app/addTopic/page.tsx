"use client";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useAddBlog from "@/hooks/useAddBlog";

export default function Page() {
  const {
    isLoading,
    handleDescriptionChange,
    handleTitleChange,
    handleSubmit,
    title,
    description,
  } = useAddBlog();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={handleTitleChange}
      />
      <CustomInput
        type="text"
        placeholder="Blog Description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <CustomButton
        title={isLoading ? "Adding Blog..." : "Add Blog"}
        type="submit"
        isLoading={isLoading}
      />
    </form>
  );
}
