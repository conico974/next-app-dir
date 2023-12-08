import { NextRequest } from "next/server";

const wait = async (ms: number) => new Promise<void>((resolve) => {setTimeout(resolve, ms)});

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const resStream = new TransformStream();
  const writer = resStream.writable.getWriter();

  const res = new Response(resStream.readable, {
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  });

    setImmediate(async () => {
       writer.write(
        `data: ${JSON.stringify({
          message: "open",
          time: new Date().toISOString(),
          data: Array(1000).fill(0).map((_, i) => ({id: i, name: `name1-${i}`})),
        })}\n\n`,
      )
      await wait(1000);
      writer.write(
        `data: ${JSON.stringify({
          message: "open",
          time: new Date().toISOString(),
          data: Array(10).fill(0).map((_, i) => ({id: i, name: `name2-${i}`})),
        })}\n\n`,
      )
      await wait(1000);
      writer.write(
        `data: ${JSON.stringify({
          message: "open",
          time: new Date().toISOString(),
          data: Array(10).fill(0).map((_, i) => ({id: i, name: `name3-${i}`})),
        })}\n\n`,
      )
      writer.write(
        `data: ${JSON.stringify({
          message: "open",
          time: new Date().toISOString(),
          data: Array(10).fill(0).map((_, i) => ({id: i, name: `name4-${i}`})),
        })}\n\n`,
      )
      writer.write(
        `data: ${JSON.stringify({
          message: "open",
          time: new Date().toISOString(),
          data: Array(1000).fill(0).map((_, i) => ({id: i, name: `name5-${i}`})),
        })}\n\n`,
      )
      writer.write(
        `data: ${JSON.stringify({
          message: "open",
          time: new Date().toISOString(),
          data: Array(10).fill(0).map((_, i) => ({id: i, name: `name6-${i}`})),
        })}\n\n`,
      )
      await wait(500);
      await writer.close();
  
    })
  return res;
}