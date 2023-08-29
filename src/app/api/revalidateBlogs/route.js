import { verifyAndProcessRequest } from "@/lib/verifyAndProcessRequest";

export const revalidate = true;

export const POST = async (req) => {
  const secretKey = process.env.HYGRAPH_BLOGS_WEBHOOK_KEY;
  return verifyAndProcessRequest(req, secretKey);
};