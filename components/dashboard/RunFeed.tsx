"use client";

import { useEffect, useState } from "react";
import { runRegistry } from "@/lib/control-plane/runRegistry";

export default function RunFeed() {
  const [runs, setRuns] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRuns(runRegistry.list());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 mt-6">

      <div className="text-sm text-slate-400 mb-3">
        Live System Events
      </div>

      <div className="space-y-2 max-h-[300px] overflow-y-auto font-mono text-xs">
        {runs.slice(0, 10).map((run) => (
          <div key={run.id} className="text-slate-300">
            <span className="text-cyan-400">[{run.type}]</span>{" "}
            <span className="text-white">{run.id}</span>{" "}
            <span className="text-emerald-400">
              {run.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}