"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  console.log("🔥 Gmail SMTP Server Action Running");

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const location = formData.get("location") as string;
  const message = formData.get("message") as string;

  // Gmail SMTP Transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"VR Physio Rehab Website" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL, // Your clinic email
      subject: "Patient Contacting for Seeking Assistance",
      html: `
        <h2>Patient Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    console.log("✅ Email sent via Gmail SMTP");
    return { success: true };
  } catch (error) {
    console.error("❌ SMTP ERROR:", error);
    return { success: false };
  }
}
