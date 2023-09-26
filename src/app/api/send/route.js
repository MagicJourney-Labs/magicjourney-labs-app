import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { contactsForm } from '@/queries/forms';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
  const { form } = await fetchGraphQL(contactsForm);
  if (req.method === 'POST') {
    const formData = await req.json();
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: formData.email,
      to: process.env.EMAIL_USER,
      subject: 'Contacts',
      text: form.formFields
        .map((item) => {
          return `${item.label} ${formData[item.name]}`;
        })
        .join('\n'),
    };

    try {
      await transporter.sendMail(mailOptions);
      return new NextResponse('email sent successfully', { status: 200 });
    } catch (error) {
      return new NextResponse('Error sending email', { status: 500 });
    }
  } else {
    return new NextResponse('Error', { status: 405 });
  }
};
