import type { NextApiRequest, NextApiResponse } from "next";

export const runtime = "nodejs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("revalidating");
    console.log(Object.keys(res));
    console.log(Object.keys(req));
    // process.env.__NEXT_PRIVATE_PREBUNDLED_REACT = "next";
    await res.revalidate("/dynamicSSG/12");
    await res.revalidate("/dynamicSSG/13");
    console.log("revalidated");
    res.status(200).json({ revalidated: true });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ revalidated: false, error: JSON.stringify(error) });
  }
}
