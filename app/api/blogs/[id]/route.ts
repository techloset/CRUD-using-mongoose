import connectMongoDB from "@/libs/mongoDb";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export interface UpdateBlogProps {
  newTitle: string;
  newDescription: string;
}

export async function PUT(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } =
    (await req.json()) as unknown as UpdateBlogProps;
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Blog updated successfully" },
    { status: 200 }
  );
}

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}
