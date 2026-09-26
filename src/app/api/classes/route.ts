import connectDB from "@/lib/mongodb";
import ClassesModel from "@/models/Classes";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const { className, sectionName, roomNo } = await req.json();
    // console.log(className);
    // console.log(req.json());
    // console.log(await req.json())

    if (!className || !sectionName || !roomNo) {
      return NextResponse.json({
        success: false,
        msg: "All fields are required",
      });
    }

    const existClass = await ClassesModel.findOne({ className, sectionName });

    if (existClass) {
      return NextResponse.json(
        {
          success: false,
          message: "Class with this section already exists!",
        },
        {
          status: 400,
        },
      );
    }

    const savedClass = await ClassesModel.create({
      className,
      sectionName,
      roomNo,
    });

    return NextResponse.json({
      success: true,
      message: "Class added successfully!",
      data: savedClass,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 400,
      },
    );
  }
};

export const GET = async (req: Request) => {
  try {
    await connectDB();

    const classList = await ClassesModel.find();

    return NextResponse.json({
      success: true,
      data: classList,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
};
