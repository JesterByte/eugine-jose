"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type CopyStatus = "idle" | "copied" | "unavailable" | "error";

export default function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  const copyEmail = async () => {
    setStatus("idle");
    if (!navigator.clipboard?.writeText) {
      setStatus("unavailable");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch (error) {
      console.error("Could not copy the contact email.", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-start">
      <Button
        type="button"
        variant="outline"
        onClick={copyEmail}
        aria-label="Copy email address"
        className="min-h-12 rounded-xl px-3"
      >
        {status === "copied" ? (
          <Check aria-hidden="true" />
        ) : (
          <Copy aria-hidden="true" />
        )}
        {status === "copied" ? "Copied" : "Copy"}
      </Button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "copied"
          ? "Email address copied to clipboard."
          : status === "unavailable"
            ? "Clipboard access is unavailable. Select the email address to copy it manually."
            : status === "error"
              ? "Could not copy the email address. Select it to copy it manually."
              : ""}
      </span>
    </div>
  );
}
