import { processRequest } from "@/lib/processRequest";

export const revalidate = true;

export const POST = async (req) => {
  const secretKey = process.env.HYGRAPH_WEBHOOK_SECRET_REVALIDATE;
  return processRequest(req, secretKey);
}; 

