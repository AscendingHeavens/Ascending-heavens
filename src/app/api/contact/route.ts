export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { connectDB } from "@/lib/db/mongoose";
import { Contact } from "@/lib/db/models/contact";

export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(req: Request) {
  try {
    let body: ContactRequest;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json<GeneralApiResponse<null>>(
        {
          code: 400,
          success: false,
          message: "Invalid JSON body",
          error: "INVALID_JSON",
        },
        { status: 400 }
      );
    }

    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json<GeneralApiResponse<null>>(
        {
          code: 400,
          success: false,
          message: "Required fields are missing",
          error: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json<GeneralApiResponse<null>>(
        {
          code: 400,
          success: false,
          message: "Invalid email address",
          error: "INVALID_EMAIL",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      name,
      email,
      company,
      message,
    });

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission`,
        html: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
      });
    } catch (mailError) {
      console.error("Email Error:", mailError);
    }

    return NextResponse.json<GeneralApiResponse<typeof contact>>(
      {
        code: 200,
        success: true,
        message: "Contact form submitted successfully",
        data: contact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json<GeneralApiResponse<null>>(
      {
        code: 500,
        success: false,
        message: "Internal server error",
        error: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}