import { Router } from "express";
import pg from "pg";
import { requireAuth } from "../lib/adminAuth.js";

const router = Router();
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.get("/submissions", requireAuth, async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, business_name, email, phone, service_needed, message, submitted_at
       FROM contact_submissions
       ORDER BY submitted_at DESC`
    );
    return res.status(200).json({ submissions: result.rows });
  } catch (err) {
    console.error("Error fetching submissions:", err);
    return res.status(500).json({ error: "Failed to fetch submissions." });
  }
});

router.get("/career-applications", requireAuth, async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, phone, location, experience, why_us, submitted_at
       FROM career_applications
       ORDER BY submitted_at DESC`
    );
    return res.status(200).json({ applications: result.rows });
  } catch (err) {
    console.error("Error fetching career applications:", err);
    return res.status(500).json({ error: "Failed to fetch applications." });
  }
});

export default router;
