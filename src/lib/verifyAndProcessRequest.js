import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { createHmac } from 'crypto';

export const verifyAndProcessRequest = async (req, secretKey) => {
  const tag = req.nextUrl.searchParams.get("tag");
  if (!tag) {
    return new NextResponse({ message: "Missing tag param" }, { status: 400 });
  }

  const signature = headers().get("gcms-signature");
  const [rawSign, rawEnv, rawTimestamp] = signature.split(', ');
  const sign = rawSign.replace('sign=', '');
  const EnvironmentName = rawEnv.replace('env=', '');
  const Timestamp = parseInt(rawTimestamp.replace('t=', ''));

  const bodyReq = await req.json()
  const body = JSON.stringify(bodyReq)

  const payload = JSON.stringify({
      Body: body,
      EnvironmentName,
      TimeStamp: Timestamp,
  });

  const hash = createHmac('sha256', secretKey).update(payload).digest('base64');
  const isValid = sign === hash;

  if (req.method !== 'POST') {
      return new NextResponse({ message: 'Method Not Allowed' }, { status: 405 });
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
