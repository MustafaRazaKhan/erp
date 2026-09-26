import { NextRequest, NextResponse } from "next/server";
import School from "@/models/School";
import connectDB from "@/lib/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  //   console.log(id);

  await connectDB();
  //   console.log(id);

  const school = await School.findById(id).select("photo");
  //   console.log(school);

  if (!school || !school.photo) {
    return new NextResponse("Photo not found", { status: 404 });
  }

  return new NextResponse(school.photo.data, {
    headers: {
      "Content-Type": school.photo.imageType,
    },
  });
}
