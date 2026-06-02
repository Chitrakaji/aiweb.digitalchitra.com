import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildMailtoUrl({
  toEmail,
  name,
  email,
  business,
  message
}: {
  toEmail: string;
  name: string;
  email: string;
  business: string;
  message: string;
}) {
  const subject = `Website consultation request from ${name}`;
  const body = [
    "New consultation request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${business || "Not provided"}`,
    "",
    "Message:",
    message
  ].join("\n");

  return `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      business?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const business = body.business?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const businessName = business ?? "";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;
    const mailtoUrl = buildMailtoUrl({
      toEmail,
      name,
      email,
      business: businessName,
      message
    });

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !fromEmail ||
      toEmail.endsWith("@example.com")
    ) {
      return NextResponse.json(
        {
          error: "Email sending is not configured yet. Please send this request using your email app.",
          mailtoUrl
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBusiness = escapeHtml(businessName || "Not provided");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Website consultation request from ${name}`,
      text: [
        "New consultation request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${businessName || "Not provided"}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Business:</strong> ${safeBusiness}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    return NextResponse.json({
      success: true,
      message: "Thanks. Your message has been sent."
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json(
      { error: "Email could not be sent right now. Please try again or use WhatsApp." },
      { status: 500 }
    );
  }
}
