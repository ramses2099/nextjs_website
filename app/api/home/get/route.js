import connectToDB from "@/app/database";
import Home from "@/app/models/Home";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Home.findOne({});
    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong Please try again",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}