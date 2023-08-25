import { NextResponse } from "next/server";

import { revalidateTag } from "next/cache";
import ApiUtils from "@/lib/api-utils";

export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  const secret = process.env.HYGRAPH_WEBHOOK_SECRET_POSTS;
  const requestBody = await req.json();

  const isValid = ApiUtils.isSecretValid(requestBody, secret);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!isValid) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  try {
    revalidateTag("posts");
    return new NextResponse({ revalidated: true }, { status: 200 });
  } catch (err) {
    return new NextResponse("Error while revalidating", { status: 500 });
  }
};
