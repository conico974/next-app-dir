import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";
// export const runtime = "edge";

export async function GET(request: Request) {
  revalidatePath("/dashboard");

  return new Response("dashboard revalidated");
}