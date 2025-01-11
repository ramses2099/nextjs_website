import connectToDB from "@/app/database";
import Experience from "@/app/models/Experience";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Experience.create(extractData);
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