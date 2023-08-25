import { headers } from "next/headers";
import { createHmac } from "crypto";

function isSecretValid(requestBody, secret) {
  const signature = headers().get("gcms-signature");

  if (!signature) {
    return false;
  }

  const { sign, env: EnvironmentName, t: Timestamp } = parseSignature(signature);
  const payload = createPayload(requestBody, EnvironmentName, Timestamp);
  const hash = generateHash(payload, secret);

  return sign === hash;
}

export function parseSignature(signature) {
  const parts = signature.split(", ");
  const parsed = {};

  for (const part of parts) {
    const [key, value] = part.split("=");
    parsed[key] = value;
  }

  return parsed;
}

function createPayload(bodyReq, EnvironmentName, Timestamp) {
  const body = JSON.stringify(bodyReq);
  return JSON.stringify({
    Body: body,
    EnvironmentName,
    TimeStamp: parseInt(Timestamp, 10),
  });
}

function generateHash(payload, secret) {
  return createHmac("sha256", secret).update(payload).digest("base64");
}

const ApiUtils = {
  isSecretValid,
};

export default ApiUtils;
