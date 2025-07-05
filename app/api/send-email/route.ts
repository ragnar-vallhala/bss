import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@bssgaria.org",
        pass: process.env.EMAIL_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"Bharat Sevashram Sangha Garia" <contact@bssgaria.org>`,
      to: to,
      subject: subject,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
