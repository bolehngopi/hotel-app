import getCurrentUser from "@/actions/getCurrentUser";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request: Request): Promise<Response> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id, title, description, price } = await request.json();

  if (!id || !title || !description || !price) {
    return NextResponse.json({ message: "ID, title, description, and price are required" }, { status: 400 });
  }

  try {
    await prisma.listing.update({
      where: { id },
      data: { title, description, price },
    });
    return NextResponse.json({ message: "Listing updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating listing:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}