"use client";

import { useEffect, useState } from "react";
import DeploymentPipeline from "./DeploymentPipeline";

type Deployment = {
  company: string;
  role: string;
  period: string;
  yaml: string;
  tools: string[];
  achievements: string[];
};

export default function CareerDeploymentCard({
  deployment,
}: {
  deployment: Deployment;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!expanded) {
      setShowResults(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowResults(true);
    }, 5200);

    return () => clearTimeout(timer);
  }, [expanded]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition">

      {/* HEADER */}
      <div className="p-6 relative">

        {/* STATUS BADGE */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
            Click to Run
          </span>

          <span className="animate-pulse text-xs text-blue-400">
            ● Runnable
          </span>
        </div>

        <h2 className="text-2xl font-bold">
          {deployment.company}
        </h2>

        <p className="text-slate-400">{deployment.role}</p>

        <p className="text-sm text-blue-400 mt-1">
          {deployment.period}
        </p>

        {/* INSTRUCTION */}
        <p className="text-xs text-slate-400 mt-3">
          ▶ Click “Run Deployment Simulation” to execute CI/CD pipeline for this role
        </p>

        {/* YAML PREVIEW */}
        <pre className="mt-4 rounded-xl bg-black/30 border border-white/10 p-4 text-cyan-400 text-sm overflow-x-auto">
          {deployment.yaml}
        </pre>

        {/* CTA BUTTON */}
        <button
          onClick={() => setExpanded(true)}
          className="
            mt-4 w-full
            flex items-center justify-center gap-2
            px-4 py-2 rounded-lg
            bg-blue-500/10
            border border-blue-500/30
            text-blue-300
            hover:bg-blue-500/20
            transition
          "
        >
          ▶ Run Deployment Simulation
        </button>
      </div>

      {/* EXPANDED SECTION */}
      {expanded && (
        <div className="px-6 pb-6">

          <DeploymentPipeline running={expanded} />

          {showResults && (
            <>
              {/* TOOLS */}
              <div className="mt-8">
                <h3 className="font-semibold text-xl mb-4">
                  Platform Capabilities
                </h3>

                <div className="flex flex-wrap gap-2">
                  {deployment.tools.map((tool: string) => (
                    <span
                      key={tool}
                      className="
                        px-3 py-1 rounded-lg
                        bg-blue-500/10
                        border border-blue-500/20
                        text-blue-300 text-sm
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="mt-8">
                <h3 className="font-semibold text-xl mb-4">
                  Deployment Outcomes
                </h3>

                <ul className="space-y-3">
                  {deployment.achievements.map((achievement: string) => (
                    <li
                      key={achievement}
                      className="border-l-2 border-emerald-500 pl-4 text-slate-300"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}