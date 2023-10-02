import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

//@ts-ignore
import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront";

const cloudFront = new CloudFrontClient({});

async function invalidateCFPaths(paths: string[]) {
  return cloudFront.send(
    new CreateInvalidationCommand({
      // Set CloudFront distribution ID here
      DistributionId: "EMABR25LK5OGG",
      InvalidationBatch: {
        CallerReference: `${Date.now()}`,
        Paths: {
          Quantity: paths.length,
          Items: paths,
        },
      },
    }),
  );
}

export async function GET(request: Request) {
  try {
    console.log("revalidating");
    console.log(Object.keys(request));
    console.log(request.headers);
    console.log(request.url);
    revalidateTag("test");
    // process.env.__NEXT_PRIVATE_PREBUNDLED_REACT = "next";
    console.log("revalidated");

    await invalidateCFPaths(["/dashboard/*"]);
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
