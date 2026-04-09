import { Router } from "express";
import { Resend } from "resend";
import pg from "pg";

const router = Router();
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.query(`
  CREATE TABLE IF NOT EXISTS career_applications (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    location TEXT,
    experience TEXT,
    why_us TEXT,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
  )
`).catch((err) => console.error("Failed to create career_applications table:", err));

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

router.post("/careers", async (req, res) => {
  const { fullName, email, phone, location, experience, whyUs } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ error: "Full name and email are required." });
  }

  try {
    await pool.query(
      `INSERT INTO career_applications (full_name, email, phone, location, experience, why_us)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [fullName, email, phone || null, location || null, experience || null, whyUs || null]
    );

    const resend = getResend();
    if (resend) {
      try {
        await resend.emails.send({
          from: "Apex Agency <onboarding@resend.dev>",
          to: ["apexva.business@gmail.com"],
          subject: `New VA Application from ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
                New Virtual Assistant Application
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; width: 160px; color: #555;">Full Name:</td>
                  <td style="padding: 10px 0;">${fullName}</td>
                </tr>
                <tr style="background: #f9f9f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 10px 0;">${phone || "Not provided"}</td>
                </tr>
                <tr style="background: #f9f9f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Location:</td>
                  <td style="padding: 10px 0;">${location || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Experience:</td>
                  <td style="padding: 10px 0;">${(experience || "Not provided").replace(/\n/g, "<br>")}</td>
                </tr>
                <tr style="background: #f9f9f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Why Apex Agency:</td>
                  <td style="padding: 10px 0;">${(whyUs || "Not provided").replace(/\n/g, "<br>")}</td>
                </tr>
              </table>
              <p style="margin-top: 20px; color: #888; font-size: 12px;">
                Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Email send error (application still saved):", emailErr);
      }
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Career application error:", err);
    return res.status(500).json({ error: "Failed to submit application. Please try again." });
  }
});

export default router;
