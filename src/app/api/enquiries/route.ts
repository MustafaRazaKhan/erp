import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    // console.log(body);

    const { name, email, phone, subject, comment, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address",
        },
        { status: 400 },
      );
    }

    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      subject: subject.trim(),
      comment: comment?.trim() || "",
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CREATE ENQUIRY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      {
        success: true,
        message: "Enquiries fetched successfully",
        data: enquiries,
        count: enquiries.length,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("GET ENQUIRIES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
