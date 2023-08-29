import { processRequest } from "@/lib/processRequest";
import { headers } from "next/headers";

export const POST = async (req) => {
  const secretKey = process.env.HYGRAPH_WEBHOOK_SECRET_REVALIDATE;
  const signatureHeader = headers(req).get("gcms-signature");
  return processRequest(req, secretKey, signatureHeader);
};

