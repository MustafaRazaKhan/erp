import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { hashedPassword } from "@/utils/password";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const { identifier, password, role } = await req.json();
    console.log(identifier, password, role);

    // ✅ Basic validation
    if (!identifier || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 },
      );
    }

    // ✅ Check existing user (by email)
    const existUser = await User.findOne({ identifier });
    if (existUser) {
      return NextResponse.json(
        { success: false, message: "Email Or UserName Already Exists" },
        { status: 400 },
      );
    }

    // ✅ Hash password
    const hashed = await hashedPassword(password);

    // ✅ Create user (default role only)
    const user = await User.create({
      identifier,

      password: hashed,
      role: role, // never trust frontend
    });

    return NextResponse.json({
      success: true,
      message: "Account Created Successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 400 },
    );
  }
};

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
      ];
    }
    const result = await (User as any).paginate(query, {
      page,
      limit,
      sort: { createdAt: -1 },
      lean: true,
    });

    return NextResponse.json({
      success: true,
      data: result.docs,
      pagination: {
        total: result.totalDocs,
        page: result.page,
        limit: result.limit,
        totalPages: result.totalPages,
        hasNextPage: result.hasNextPage,
        hasPrevPage: result.hasPrevPage,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Server Error" },
      { status: 500 },
    );
  }
};
