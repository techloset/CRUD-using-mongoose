"use client";

import { HiOutlineTrash } from "react-icons/hi";
import useDeleteBlog from "@/hooks/useDeleteBlog";

export default function RemoveBtn({ id }: { id: string }) {
  const { removeBlog, isLoading } = useDeleteBlog({ id });

  return (
    <button onClick={removeBlog} className="text-red-400" disabled={isLoading}>
      {isLoading ? <span>Loading...</span> : <HiOutlineTrash size={24} />}
    </button>
  );
}
