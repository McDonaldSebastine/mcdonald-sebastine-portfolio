import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactPayload, type ContactPayload } from "@/lib/validation";
import { siteConfig } from "@/lib/site";

// The address that receives every submission. Defaults to the site owner's
// email but can be overridden via env var without touching code.
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || siteConfig.email;

// Must be an address on a domain verified in your Resend account.
// resend.dev works out of the box for testing only.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validation = validateContactPayload(body);

  if (!validation.valid) {
    const firstError = Object.values(validation.errors)[0];
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  const name = body.name!.trim();
  const email = body.email!.trim();
  const message = body.message!.trim();

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No provider configured yet — log so nothing is silently lost during
    // local development, but don't fail the request. See .env.example and
    // the README for how to enable real delivery.
    console.warn(
      "RESEND_API_KEY is not set — contact form submission was not emailed:",
      { name, email, message }
    );
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Portfolio <${FROM_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #18181b;">
          <p><strong>New message from your portfolio contact form</strong></p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Message could not be sent right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Message could not be sent right now. Please try again shortly." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
