import { Router } from "express";
import pg from "pg";

const router = Router();
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.get("/submissions", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, email, phone, message, submitted_at
       FROM contact_submissions
       ORDER BY submitted_at DESC`
    );
    return res.status(200).json({ submissions: result.rows });
  } catch (err) {
    console.error("Error fetching submissions:", err);
    return res.status(500).json({ error: "Failed to fetch submissions." });
  }
});

export default router;
