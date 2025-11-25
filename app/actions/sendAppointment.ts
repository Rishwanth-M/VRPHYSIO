"use server";

import nodemailer from "nodemailer";

export async function sendAppointment(formData: FormData) {
  console.log("🔥 Appointment Server Action Running");

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const location = formData.get("location") as string;
  const service = formData.get("service") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"VR Physio Rehab Appointments" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log("✅ Appointment Email Sent");
    return { success: true };
  } catch (error) {
    console.error("❌ Appointment SMTP ERROR:", error);
    return { success: false };
  }
}
