import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { contactsForm } from '@/queries/forms';
import { NextResponse } from 'next/server';

export const revalidate = true;

export const GET = async () => {
  const data = await fetchGraphQL(contactsForm);
  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
};
