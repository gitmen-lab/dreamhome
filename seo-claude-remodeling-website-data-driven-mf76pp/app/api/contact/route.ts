import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/data/company";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, service, city, message } = body as {
      name?: string;
      phone?: string;
      email?: string;
      service?: string;
      city?: string;
      message?: string;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || company.email;

    if (!apiKey) {
      // No email provider configured yet — log so submissions aren't silently
      // lost during local development, but don't pretend an email was sent.
      // Set RESEND_API_KEY (and optionally CONTACT_TO_EMAIL) to enable real delivery.
      console.warn(
        "[contact] RESEND_API_KEY is not set — this submission was received but no email was sent."
      );
      console.log("Contact form submission (not emailed):", {
        name,
        phone,
        email,
        service,
        city,
        message,
      });
      // TEMP DEBUG — remove after diagnosing the Hostinger env var issue.
      return NextResponse.json({ success: true, _debug: { hasApiKey: false, toEmail } });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Resend's shared sandbox sender works out of the box; once you verify
      // your own domain in the Resend dashboard, switch this to something
      // like `${company.name} <estimates@mydreamhomeremodeling.com>`.
      from: `${company.name} Website <onboarding@resend.dev>`,
      to: toEmail,
      replyTo: email || undefined,
      subject: `New estimate request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "(not provided)"}`,
        `Service: ${service || "(not specified)"}`,
        `City: ${city || "(not specified)"}`,
        "",
        "Message:",
        message || "(none)",
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend send failed:", error);
      // TEMP DEBUG — remove after diagnosing the Hostinger env var issue.
      return NextResponse.json(
        { error: "Unable to submit the form. Please try again.", _debug: { hasApiKey: true, toEmail, resendError: error } },
        { status: 500 }
      );
    }

    // TEMP DEBUG — remove after diagnosing the Hostinger env var issue.
    return NextResponse.json({ success: true, _debug: { hasApiKey: true, toEmail } });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "Unable to submit the form. Please try again." },
      { status: 500 }
    );
  }
}
