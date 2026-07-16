import { NextResponse } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/validation";

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

  // Wire this up to an email provider (Resend, SendGrid, Postmark, etc.)
  // or a storage/CRM integration. Kept provider-agnostic here so the
  // portfolio owner can plug in credentials via environment variables.
  //
  // Example with Resend:
  // await resend.emails.send({
  //   from: "portfolio@mcdonaldsebastine.com",
  //   to: "sabastinemc@gmail.com",
  //   subject: `New portfolio message from ${name}`,
  //   text: message,
  //   replyTo: email,
  // });

  console.log("New contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
