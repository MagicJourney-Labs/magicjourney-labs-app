import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
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
      subject: 'Formos pateikimas',
      text: `
        Vardas: ${formData.name}
        El. paštas: ${formData.email}
        Telefono numeris: ${formData.phone}
        Žinutė: ${formData.message}
      `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new NextResponse('El. laiškas išsiųstas sėkmingai', { status: 200 });
    } catch (error) {
        return new NextResponse('Klaida siunčiant el. laišką', { status: 500 });
      }
  } else {
      return new NextResponse('Error', { status: 405 });
  }
};
