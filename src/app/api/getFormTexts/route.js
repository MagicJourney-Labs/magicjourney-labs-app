import { fetchGraphQL } from '@/lib/graphqlUtils';
import { contactsForm } from '@/queries/forms';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await fetchGraphQL(contactsForm);
  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
};
