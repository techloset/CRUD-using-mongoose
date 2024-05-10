// import EditForm from "@/components/EditForm";

// const getBlogById = async (id: any) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch blog");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// export default async function EditTopic({ params }: { params: any }) {
//   const { id } = params;

//   const topic = await getBlogById(id);

//   const { title, description } = topic;

//   return <EditForm id={id} newTitle={title} description={description} />;
// }

import EditForm from "@/components/EditForm";

const getBlogById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function EditTopic({ params }: { params: any }) {
  const { id } = params;

  const topic = await getBlogById(id);
  console.log(topic);

  const { title, description } = topic.blog;
  console.log("Title", title, "Description", description);

  return <EditForm id={id} title={title} description={description} />;
}
