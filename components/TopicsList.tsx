// import React from "react";
// import RemoveBtn from "./RemoveBtn";
// import Link from "next/link";
// import { HiPencilAlt } from "react-icons/hi";

// const getBlogs = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/blogs", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error fetching blog:", error);
//   }
// };
// export default async function TopicsList() {
//   const blogs = await getBlogs();

//   return (
//     <>
//       {blogs?.map((item: any) => (
//         <div
//           key={item._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between rounded-md gap-5 items-start"
//         >
//           <div className="">
//             <h2 className="font-semibold text-2xl">{item.title}</h2>
//             <div>{item.description}</div>
//           </div>

//           <div className="flex gap-2">
//             <RemoveBtn id={item._id} />
//             <Link href={`/editTopic/${item._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Loader from "./Loader";

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

export default function TopicsList() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        blogs?.map((item: any) => (
          <div
            key={item._id}
            className="p-4 border border-slate-300 my-3 flex justify-between rounded-md gap-5 items-start"
          >
            <div className="">
              <h2 className="font-semibold text-2xl">{item.title}</h2>
              <div>{item.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={item._id} />
              <Link href={`/editTopic/${item._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
