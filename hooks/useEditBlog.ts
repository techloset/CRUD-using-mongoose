import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useEditBlog({
  id,
  title,
  description,
}: {
  id: any;
  title: any;
  description: any;
}) {
  const router = useRouter();

  const [newTitle, setNewTitle] = useState(title || "");
  const [newDescription, setNewDescription] = useState(description || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNewTitle(title || "");
    setNewDescription(description || "");
  }, [title, description]);

  const handleTitleChange = (e: any) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setNewDescription(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!newTitle.trim() || !newDescription.trim()) {
      toast.error("Title and description are required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
        }),
      });

      if (res.ok) {
        toast.success("Blog updated successfully");
        router.push("/");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    handleDescriptionChange,
    handleTitleChange,
    handleSubmit,
    newTitle,
    newDescription,
  };
}
