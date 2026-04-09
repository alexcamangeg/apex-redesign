import { useEffect, useState } from "react";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  submitted_at: string;
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/submissions")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load submissions.");
        return res.json();
      })
      .then((data) => setSubmissions(data.submissions))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Submissions</h1>
            <p className="text-muted-foreground mt-1">All contact form and booking enquiries</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="text-sm text-primary border border-primary/30 px-4 py-2 hover:bg-primary/5 transition-colors"
          >
            Refresh
          </button>
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
            <p className="text-muted-foreground text-sm mt-2">When someone fills out the contact form, it will appear here.</p>
          </div>
        )}

        {!loading && submissions.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              {submissions.length} submission{submissions.length !== 1 ? "s" : ""} total
            </p>
            <div className="space-y-4">
              {submissions.map((s) => (
                <div key={s.id} className="bg-card border border-border p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-foreground">{s.name}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <a
                          href={`mailto:${s.email}`}
                          className="text-primary text-sm hover:underline"
                        >
                          {s.email}
                        </a>
                        {s.phone && (
                          <a
                            href={`tel:${s.phone}`}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
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
