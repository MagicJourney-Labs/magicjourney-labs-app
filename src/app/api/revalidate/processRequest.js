import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { verifyRequest } from '@/lib/verifyRequest';

export const revalidate = true;

export const processRequest = async (req, secretKey, signatureHeader) => {
  const verificationResult = await verifyRequest(
    req,
    secretKey,
    signatureHeader
  );
  if (!verificationResult) {
    return new NextResponse('Invalid token error', { status: 401 });
  }

  const tag = req.nextUrl.searchParams.get('tag');
  if (!tag) {
    return new NextResponse({ message: 'Missing tag param' }, { status: 400 });
  }

  if (req.method !== 'POST') {
    return new NextResponse({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    revalidateTag(tag);

    return new NextResponse({ revalidated: true }, { status: 200 });
  } catch (err) {
    return new NextResponse('Error while revalidating', { status: 500 });
  }
};
