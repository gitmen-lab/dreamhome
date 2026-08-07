import type { Metadata } from "next";
import { TrendingUp, TrendingDown } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { dashboard } from "@/data/dashboard";
import { SendToClaudeButton } from "@/components/SendToClaudeButton";

export const metadata: Metadata = buildMetadata({
  title: `Ads Dashboard | ${company.name}`,
  description: "Internal Google Ads performance dashboard.",
  path: "/dashboard",
  noindex: true,
});

function formatRecommendationType(type: string): string {
  return type
    .toLowerCase()
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export default function DashboardPage() {
  const { campaigns, recommendations, generatedAt } = dashboard;
  const lastUpdated = new Date(generatedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="container max-w-6xl py-12">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-charcoal">Ads Dashboard</h1>
        <p className="text-xs text-muted-foreground">
          Last updated: {lastUpdated} · static snapshot — see below to refresh it
        </p>
      </div>

      {/* ROAS by campaign */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-charcoal">ROAS by Campaign</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Campaign</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Cost</th>
                <th className="px-4 py-3">Conversions</th>
                <th className="px-4 py-3">Conv. Value</th>
                <th className="px-4 py-3">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="px-4 py-3 font-medium text-charcoal">{c.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.status}</td>
                  <td className="px-4 py-3 text-muted-foreground">${c.cost.toFixed(2)}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.conversions}</td>
                  <td className="px-4 py-3 text-muted-foreground">${c.conversionsValue.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    {c.roas === null ? (
                      <span className="text-muted-foreground/70">No spend yet</span>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1 font-semibold ${
                          c.roas >= 1 ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {c.roas >= 1 ? (
                          <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {c.roas.toFixed(2)}x
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {campaigns.every((c) => c.cost === 0) && (
          <p className="mt-3 text-sm text-muted-foreground">
            No campaigns have spent any budget yet — ROAS will populate once a campaign is
            unpaused and running.
          </p>
        )}
      </section>

      {/* Recommendations */}
      <section className="mt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold text-charcoal">Top Recommendations</h2>
          <p className="text-xs text-muted-foreground">
            &ldquo;Send to Claude&rdquo; copies a ready-to-paste prompt to your clipboard
          </p>
        </div>

        {recommendations.length === 0 ? (
          <div className="mt-4 rounded-lg border border-dashed bg-muted px-6 py-10 text-center">
            <p className="text-sm text-muted-foreground">
              No recommendations yet. Google Ads generates these once a campaign has real
              traffic and spend history — check back after your campaign has been running for a
              few days.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {recommendations.map((rec) => (
              <div
                key={rec.resourceName}
                className="flex flex-col justify-between gap-4 rounded-lg border bg-card p-5 shadow-sm"
              >
                <div>
                  <p className="text-base font-bold text-charcoal">
                    {formatRecommendationType(rec.type)}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{rec.campaign}</p>
                  <p className="mt-3 text-2xl font-bold text-primary">
                    {rec.dollarsRecoverable !== null
                      ? `$${rec.dollarsRecoverable.toFixed(2)}`
                      : "—"}
                  </p>
                  <p className="text-xs text-muted-foreground">estimated recoverable</p>
                </div>
                <SendToClaudeButton recommendation={rec} />
              </div>
            ))}
          </div>
        )}
      </section>

      <p className="mt-12 text-xs text-muted-foreground/70">
        To refresh this data: run{" "}
        <code className="rounded bg-muted px-1.5 py-0.5">python fetch_dashboard_data.py</code>{" "}
        in the Google Ads project, then commit + push (auto-deploys to Hostinger).
      </p>
    </div>
  );
}
