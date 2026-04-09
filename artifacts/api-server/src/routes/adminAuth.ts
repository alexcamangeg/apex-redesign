import { Router } from "express";
import { createSession, deleteSession, validateSession } from "../lib/adminAuth.js";

const router = Router();

router.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  const expectedUsername = process.env.ADMIN_USERNAME || "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return res.status(503).json({ error: "Admin credentials not configured. Please set ADMIN_PASSWORD." });
  }

  if (username !== expectedUsername || password !== expectedPassword) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  const token = createSession();
  return res.status(200).json({ token });
});

router.post("/admin/logout", (req, res) => {
  const auth = req.headers["authorization"] || "";
  const token = auth.replace("Bearer ", "").trim();
  if (token) deleteSession(token);
  return res.status(200).json({ success: true });
});

router.get("/admin/verify", (req, res) => {
  const auth = req.headers["authorization"] || "";
  const token = auth.replace("Bearer ", "").trim();
  return res.status(200).json({ valid: !!token && validateSession(token) });
});

export default router;
