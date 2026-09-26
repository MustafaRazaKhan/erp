import { NextRequest, NextResponse } from "next/server";

import School from "@/models/School";
import connectDB from "@/lib/mongodb";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to database
    await connectDB();
    //     address
    // :
    // "Irure odio quam moll"
    // code
    // :
    // "Ut eu quod aut minim"
    // contact
    // :
    // "+1 (823) 604-3871"
    // email
    // :
    // "dirunu@mailinator.com"
    // name
    // :
    // "Sylvia Mooney"
    // photo
    // :
    // null

    // Parse multipart/form-data
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const code = formData.get("code") as string;
    const email = formData.get("email") as string;
    const contact = formData.get("contact") as string;
    const address = formData.get("address") as string;

    const imageFile = formData.get("photo") as File | null;
    console.log(imageFile);

    // Required fields
    if (!name || !email || !imageFile) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and photo are required",
        },
        { status: 400 },
      );
    }

    // Check if school already exists
    const existingSchool = await School.findOne();

    if (existingSchool) {
      return NextResponse.json(
        {
          success: false,
          message: "School already exists",
        },
        { status: 409 },
      );
    }

    // Convert image to Buffer
    const photoBuffer = Buffer.from(await imageFile.arrayBuffer());

    // Create school

    const savedSchool = await School.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      contact: contact?.trim() || "",
      code: code?.trim().toUpperCase() || "",
      address: address?.trim() || "",
      photo: {
        data: photoBuffer,
        imageType: imageFile.type,
        name: imageFile.name,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "School saved successfully",
        data: savedSchool,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CREATE SCHOOL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create school",
      },
      { status: 500 },
    );
  }
};

export const GET = async () => {
  try {
    await connectDB();

    const schools = await School.find()
      .select("-photo")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: schools,
    });
  } catch (error) {
    console.error("GET SCHOOLS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch schools",
      },
      { status: 500 },
    );
  }
};
