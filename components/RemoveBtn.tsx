"use client";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }: { id: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const removeBlog = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Blog deleted successfully");
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={removeBlog} className="text-red-400" disabled={isLoading}>
      {isLoading ? <span>Loading...</span> : <HiOutlineTrash size={24} />}
    </button>
  );
}
