import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { name, email, company, message } = data;

  // Basic validation
  if (!name || !email || !company || !message) {
    return new Response(
      JSON.stringify({ success: false, error: "All fields are required." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const transporter = nodemailer.createTransport({
    host: import.meta.env.MAIL_SERVER || "mail.asp-automation.com",
    port: import.meta.env.MAIL_PORT ? parseInt(import.meta.env.MAIL_PORT) : 465,
    secure: true, // true for port 465 (SSL)
    auth: {
      user: import.meta.env.MAIL_USERNAME || "noreply@asp-automation.com",
      pass: import.meta.env.MAIL_PASSWORD || "pwd",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <noreply@asp-automation.com>`,
      to: "gunturaji852@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name} — ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("SMTP error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};