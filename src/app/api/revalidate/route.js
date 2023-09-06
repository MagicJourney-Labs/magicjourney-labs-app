import { headers } from 'next/headers';
import { processRequest } from './processRequest';

export const revalidate = true;

export const POST = async (req) => {
  const secretKey = process.env.HYGRAPH_WEBHOOK_SECRET_REVALIDATE;
  const signatureHeader = headers(req).get('gcms-signature');
  return processRequest(req, secretKey, signatureHeader);
};
