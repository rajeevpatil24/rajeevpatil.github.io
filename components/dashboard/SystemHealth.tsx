"use client";

import { useEffect, useState } from "react";
import { runRegistry } from "@/lib/control-plane/runRegistry";

export default function SystemHealth() {
  const [health, setHealth] = useState("GREEN");

  useEffect(() => {
    const interval = setInterval(() => {
      const runs = runRegistry.list();

      const hasFailures = runs.some((r) => r.status === "failed");

      setHealth(hasFailures ? "DEGRADED" : "GREEN");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 mt-6">
      <div className="text-slate-400 text-sm">System Health</div>

      <div
        className={`text-2xl font-bold ${
          health === "GREEN"
            ? "text-emerald-400"
            : "text-red-400"
        }`}
      >
        {health}
      </div>
    </div>
  );
}