"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 rounded-lg border border-black/10 bg-zinc-50 px-3 py-1.5 font-mono text-[11px] font-medium text-zinc-500 transition-colors duration-300 hover:border-black/20 hover:text-black dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-white",
      )}
    >
      <span>{command}</span>
      {copied ? (
        <Check className="h-3 w-3 text-green-500" strokeWidth={2} />
      ) : (
        <Copy className="h-3 w-3" strokeWidth={2} />
      )}
    </button>
  );
}
