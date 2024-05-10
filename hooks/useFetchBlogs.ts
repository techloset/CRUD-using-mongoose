import { useEffect, useState } from "react";

export default function useFetchBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
  };
}
