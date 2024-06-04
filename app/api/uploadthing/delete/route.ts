import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { UTApi } from "uploadthing/server";

import { authOptions } from "@/lib/auth";

const utapi = new UTApi();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { imageKey } = await req.json();

  try {
    const res = await utapi.deleteFiles(imageKey);
    return NextResponse.json(res);
  } catch (error) {
    console.log("error at uploadthing/delete", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
