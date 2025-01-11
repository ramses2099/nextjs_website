import connectToDB from "@/app/database";
import Education from "@/app/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Education.create(extractData);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data Saved successsfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong saving data",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong saving data",
    });
  }
}
