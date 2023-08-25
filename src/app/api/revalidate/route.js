import { NextResponse } from "next/server";

import { revalidateTag } from "next/cache";
import ApiUtils from "@/lib/api-utils";

export const revalidate = true;

export const POST = async (request) => {
  const requestBody = await request.json();

  if (ApiUtils.isSecretValid(requestBody, process.env.HYGRAPH_WEBHOOK_SECRET_REVALIDATE)) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }

  try {
    // revalidateTag(tag);

    return new NextResponse({ revalidated: true }, { status: 200 });
  } catch (err) {
    return new NextResponse("Error while revalidating", { status: 500 });
  }
};
