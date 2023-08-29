import { NextResponse } from "next/server";
import { createHmac } from 'crypto';

export const verifyRequest = (req, secretKey, signature) => {
    console.log("secretKey in verify" + secretKey)
    console.log("signature in verify" + signature)
    if (!signature) {
        return new NextResponse("Signature missing", { status: 401 });
    }

    const [rawSign, rawEnv, rawTimestamp] = signature.split(', ');
    const sign = rawSign.replace('sign=', '');
    const EnvironmentName = rawEnv.replace('env=', '');
    const Timestamp = parseInt(rawTimestamp.replace('t=', ''));

    const payload = JSON.stringify({
        Body: req.body,
        EnvironmentName,
        TimeStamp: Timestamp,
    });

    const hash = createHmac('sha256', secretKey).update(payload).digest('base64');
    const isValid = sign === hash;
    console.log(isValid)
    return isValid;
};
