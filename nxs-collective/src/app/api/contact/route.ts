import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form submission handler.
 *
 * Reads RESEND_API_KEY, CONTACT_EMAIL and CONTACT_FROM_EMAIL from server
 * environment variables (set in Vercel → Project Settings → Environment
 * Variables). These are only ever read here, server-side — never imported
 * into config/site.ts or any client component, so they can't end up in the
 * browser bundle.
 *
 * On any failure (missing config, Resend API error, network error) this
 * returns a real error response rather than a fake success — the contact
 * form on the client only shows a success message when this route actually
 * confirms the email was sent.
 */
export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

const VALID_SERVICES = ["Physiotherapy", "Sports Therapy", "Personal Training"];

function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name || !body.name.trim()) return "Name is required.";
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "A valid email address is required.";
  }
  if (!body.phone || !body.phone.trim()) return "Phone number is required.";
  if (
    !Array.isArray(body.services) ||
    body.services.length === 0 ||
    !body.services.every((s) => VALID_SERVICES.includes(s))
  ) {
    return "Select at least one service.";
  }
  if (!body.message || !body.message.trim()) return "Message is required.";
  return null;
}

function escapeHtml(value: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form: RESEND_API_KEY, CONTACT_EMAIL or CONTACT_FROM_EMAIL is not set."
    );
    return NextResponse.json(
      { error: "Email delivery is not configured on the server yet." },
      { status: 500 }
    );
  }

  const { name, email, phone, services, message } = body as ContactPayload;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name} — NXS Collective`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Services interested in:</strong> ${services.map(escapeHtml).join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again or contact us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failure:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
