import { NextRequest, NextResponse } from "next/server"

export const revalidate = 30;

export const GET = async (request: NextRequest) => {
  return NextResponse.json({
    status: 200,
    body: {
      message: "Hello World",
    },
  })
}