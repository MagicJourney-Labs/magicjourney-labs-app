import { NextResponse } from "next/server";

import { revalidateTag } from "next/cache";

export const revalidate = true;

export const POST = async (request) => {
  const tag = request.nextUrl.searchParams.get("tag");
  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }

  const secret = process.env.HYGRAPH_BLOGS_WEBHOOK_KEY

  const signature = headers().get("gcms-signature");

  const [rawSign, rawEnv, rawTimestamp] = signature.split(', ');

  const sign = rawSign.replace('sign=', '');
  const EnvironmentName = rawEnv.replace('env=', '');
  const Timestamp = parseInt(rawTimestamp.replace('t=', ''));

  const bodyReq = await req.json()
  const body = JSON.stringify(bodyReq)

  let payload = JSON.stringify({
      Body: body,
      EnvironmentName,
      TimeStamp: Timestamp,
  });

  const hash = createHmac('sha256', secret).update(payload).digest('base64');
  const isValid = sign === hash;

  if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (!isValid) {
      return new NextResponse(" Invalid token Error :(", { status: 401 });
  }

  try {
    revalidateTag(tag);

    return new NextResponse({ revalidated: true }, { status: 200 });
  } catch (err) {
    return new NextResponse("Error while revalidating", { status: 500 });
  }
};
