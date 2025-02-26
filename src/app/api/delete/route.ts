import getCurrentUser from "@/actions/getCurrentUser";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: Request): Promise<Response> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let id: string;
  try {
    const body = await request.json();
    id = body.id;
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    await prisma.listing.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Listing deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting listing:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}