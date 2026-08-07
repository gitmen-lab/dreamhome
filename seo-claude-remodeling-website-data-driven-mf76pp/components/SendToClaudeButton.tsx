"use client";

import { useState } from "react";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Recommendation } from "@/data/dashboard";

function buildPrompt(rec: Recommendation): string {
  const dollars =
    rec.dollarsRecoverable !== null
      ? `$${rec.dollarsRecoverable.toFixed(2)}`
      : "unknown (not estimated by Google yet)";

  return [
    "Apply this Google Ads recommendation:",
    "",
    `Type: ${rec.type}`,
    `Campaign: ${rec.campaign}`,
    `Estimated dollars recoverable: ${dollars}`,
    `Resource: ${rec.resourceName}`,
    "",
    "Show me exactly what this recommendation would change and get my explicit approval before applying anything live.",
  ].join("\n");
}

export function SendToClaudeButton({ recommendation }: { recommendation: Recommendation }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    await navigator.clipboard.writeText(buildPrompt(recommendation));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button type="button" onClick={handleClick} size="sm">
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          Copied
        </>
      ) : (
        <>
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Send to Claude
        </>
      )}
    </Button>
  );
}
