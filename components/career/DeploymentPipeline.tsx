"use client";

import { useEffect, useRef, useState } from "react";
import { globalEventBus } from "@/lib/control-plane/globalEventBus";

const stages = [
  "git commit",
  "docker build",
  "helm package",
  "terraform apply",
  "kubectl apply",
  "argocd sync",
  "deployment healthy",
];

export default function DeploymentPipeline({
  running,
}: {
  running: boolean;
}) {
  const [current, setCurrent] = useState(-1);
  const [status, setStatus] = useState<"idle" | "running" | "success">("idle");

  const indexRef = useRef(0);

  useEffect(() => {
    if (!running) {
      setCurrent(-1);
      setStatus("idle");
      indexRef.current = 0;
      return;
    }

    setStatus("running");
    setCurrent(-1);
    indexRef.current = 0;

    globalEventBus.emit("RUN_CREATED", "Deployment pipeline started");

    const timer = setInterval(() => {
      const index = indexRef.current;

      if (index >= stages.length) {
        clearInterval(timer);
        setStatus("success");

        globalEventBus.emit(
          "RUN_SUCCESS",
          "Deployment completed successfully"
        );

        return;
      }

      setCurrent(index);

      globalEventBus.emit(
        "RUN_STAGE",
        `Executing stage: ${stages[index]}`
      );

      indexRef.current += 1;
    }, 800);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="space-y-2 mt-6">
      {/* PIPELINE HEADER */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-slate-400">
          Pipeline Status:
        </div>

        <div
          className={[
            "text-xs px-2 py-1 rounded-full border",
            status === "idle"
              ? "border-white/10 text-slate-400"
              : status === "running"
              ? "border-yellow-500/30 text-yellow-400"
              : "border-emerald-500/30 text-emerald-400",
          ].join(" ")}
        >
          {status.toUpperCase()}
        </div>
      </div>

      {/* STAGES */}
      {stages.map((stage, index) => {
        const done = index < current;
        const active = index === current;

        return (
          <div
            key={stage}
            className={[
              "rounded-lg border px-4 py-2 transition-all duration-300",
              done
                ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                : active
                ? "border-yellow-500 bg-yellow-500/10 text-yellow-300 animate-pulse"
                : "border-white/10 text-slate-500",
            ].join(" ")}
          >
            <div className="flex items-center gap-2">
              <span>
                {done ? "✓" : active ? "⟳" : "○"}
              </span>

              <span>{stage}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}