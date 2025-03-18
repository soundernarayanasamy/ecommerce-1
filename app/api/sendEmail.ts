// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or use your email service (e.g., Gmail, SendGrid, etc.)
      auth: {
        user: process.env.GMAIL_USER, // Your email
        pass: process.env.GMAIL_PASS, // Your email app-specific password (if using Gmail)
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, // Your email
      to: "quraherbs@gmail.com", // Recipient email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nAddress:\nS/O: Velusamy,\nNO 67(1), VENKATACHALAPATHY NAGAR 1ST STREET, Kurichi\nSUNDARAPURAM POST, Coimbatore- 641024`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
