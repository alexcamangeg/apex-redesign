import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  submitted_at: string;
}

const TOKEN_KEY = "apex_admin_token";

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || "";
}

function setToken(t: string) {
  sessionStorage.setItem(TOKEN_KEY, t);
}

function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed.");
      setToken(data.token);
      onLogin();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <img
            src="/images/logo.jpeg"
            alt="Apex Agency"
            className="h-20 w-auto mx-auto mb-6"
            style={{ mixBlendMode: "screen" }}
          />
          <h1 className="text-2xl font-serif font-bold text-foreground">Admin Login</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to view submissions</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-none border-border bg-background focus-visible:ring-primary"
              placeholder="admin"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-none border-border bg-background focus-visible:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full rounded-none h-11">
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function verifyToken() {
    const token = getToken();
    if (!token) { setChecking(false); return; }
    try {
      const res = await fetch("/api/admin/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.valid) {
        setAuthenticated(true);
      } else {
        clearToken();
      }
    } catch {
      clearToken();
    }
    setChecking(false);
  }

  async function fetchSubmissions() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/submissions", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) { handleLogout(); return; }
      if (!res.ok) throw new Error("Failed to load submissions.");
      const data = await res.json();
      setSubmissions(data.submissions);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${getToken()}` },
    }).catch(() => {});
    clearToken();
    setAuthenticated(false);
    setSubmissions([]);
  }

  useEffect(() => { verifyToken(); }, []);
  useEffect(() => { if (authenticated) fetchSubmissions(); }, [authenticated]);

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Submissions</h1>
            <p className="text-muted-foreground mt-1">All contact form and booking enquiries</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchSubmissions}
              className="text-sm text-primary border border-primary/30 px-4 py-2 hover:bg-primary/5 transition-colors"
            >
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="text-sm text-muted-foreground border border-border px-4 py-2 hover:bg-card transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-24 text-muted-foreground">Loading submissions...</div>
        )}
        {error && (
          <div className="text-center py-24 text-red-500">{error}</div>
        )}
        {!loading && !error && submissions.length === 0 && (
          <div className="text-center py-24 border border-border">
            <p className="text-muted-foreground text-lg">No submissions yet.</p>
            <p className="text-muted-foreground text-sm mt-2">
              When someone fills out the contact form, it will appear here.
            </p>
          </div>
        )}
        {!loading && submissions.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              {submissions.length} submission{submissions.length !== 1 ? "s" : ""} total
            </p>
            <div className="space-y-4">
              {submissions.map((s) => (
                <div
                  key={s.id}
                  className="bg-card border border-border p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-foreground">{s.name}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <a href={`mailto:${s.email}`} className="text-primary text-sm hover:underline">
                          {s.email}
                        </a>
                        {s.phone && (
                          <a href={`tel:${s.phone}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                            {s.phone}
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(s.submitted_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed whitespace-pre-wrap border-t border-border pt-4">
                    {s.message}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
