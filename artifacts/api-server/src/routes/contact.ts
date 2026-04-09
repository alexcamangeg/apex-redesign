import { Router } from "express";
import nodemailer from "nodemailer";
import pg from "pg";

const router = Router();
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

function createTransporter() {
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "apexva.business@gmail.com",
      pass,
    },
  });
}

router.post("/contact", async (req, res) => {
  const { name, businessName, email, phone, serviceNeeded, message } = req.body;

  if (!name || !email || !message || !businessName || !serviceNeeded) {
    return res.status(400).json({ error: "All required fields must be filled in." });
  }

  try {
    await pool.query(
      `INSERT INTO contact_submissions (name, business_name, email, phone, service_needed, message)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, businessName, email, phone || null, serviceNeeded, message]
    );

    const transporter = createTransporter();
    if (transporter) {
      try { await transporter.sendMail({
        from: '"Apex Agency Website" <apexva.business@gmail.com>',
        to: "apexva.business@gmail.com",
        subject: `New Inquiry from ${name} — ${businessName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #555;">Full Name:</td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Business Name:</td>
                <td style="padding: 10px 0;">${businessName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 10px 0;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Service Needed:</td>
                <td style="padding: 10px 0;">${serviceNeeded}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                <td style="padding: 10px 0;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; color: #888; font-size: 12px;">
              Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
            </p>
          </div>
        `,
      }); } catch (emailErr) {
        console.error("Email send error (submission still saved):", emailErr);
      }
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact submission error:", err);
    return res.status(500).json({ error: "Failed to save submission. Please try again." });
  }
});

export default router;
