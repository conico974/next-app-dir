import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    console.log("revalidating");
    console.log(Object.keys(request));
    revalidateTag("test");
    // process.env.__NEXT_PRIVATE_PREBUNDLED_REACT = "next";
    console.log("revalidated");
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      revalidated: false,
      error: JSON.stringify(error),
    });
    // res.status(500).json({ revalidated: false, error: JSON.stringify(error) });
  }
}
