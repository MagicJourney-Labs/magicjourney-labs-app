import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export const verifyRequest = async (req, secretKey, signature) => {
  const bodyReq = await req.json();
  const body = JSON.stringify(bodyReq);
  if (!signature) {
    return new NextResponse('Signature missing', { status: 401 });
  }

  const [rawSign, rawEnv, rawTimestamp] = signature.split(', ');
  const sign = rawSign.replace('sign=', '');
  const EnvironmentName = rawEnv.replace('env=', '');
  const Timestamp = parseInt(rawTimestamp.replace('t=', ''));

  const payload = JSON.stringify({
    Body: body,
    EnvironmentName,
    TimeStamp: Timestamp,
  });

  const hash = createHmac('sha256', secretKey).update(payload).digest('base64');
  const isValid = sign === hash;
  return isValid;
};
