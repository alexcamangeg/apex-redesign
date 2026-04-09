import crypto from "node:crypto";

const sessions = new Map<string, number>();
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

export function createSession(): string {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, Date.now() + SESSION_TTL_MS);
  return token;
}

export function validateSession(token: string): boolean {
  const expiry = sessions.get(token);
  if (!expiry) return false;
  if (Date.now() > expiry) {
    sessions.delete(token);
    return false;
  }
  return true;
}

export function deleteSession(token: string): void {
  sessions.delete(token);
}

export function requireAuth(req: any, res: any, next: any) {
  const auth = req.headers["authorization"] || "";
  const token = auth.replace("Bearer ", "").trim();
  if (!token || !validateSession(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}
