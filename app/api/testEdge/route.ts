export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function GET(request: Request) {

  return new Response(JSON.stringify({  
    reqHeaders: Object.fromEntries(request.headers.entries()),
    time: new Date().toISOString(), 
    data: Array(100).fill(0).map((_, i) => ({ id: i, name: `name1-${i}` }))
}), {
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
});
}