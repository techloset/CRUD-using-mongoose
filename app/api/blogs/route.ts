import connectMongoDB from "@/libs/mongoDb";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Blog.create({ title, description });
  return NextResponse.json(
    { message: "Blog Created Successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json(blogs);
}