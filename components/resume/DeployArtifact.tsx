"use client";

import { useState } from "react";

const steps = [
  "git push",
  "terraform apply",
  "eks cluster ready",
  "helm deployment",
  "argocd sync",
  "security validation",
  "platform healthy",
];

export default function DeployArtifact() {
  const [current, setCurrent] = useState(-1);
  const [complete, setComplete] = useState(false);

  const run = () => {
    setCurrent(-1);
    setComplete(false);

    let index = 0;

    const timer = setInterval(() => {
      setCurrent(index);

      index++;

      if (index >= steps.length) {
        clearInterval(timer);
        setComplete(true);
      }
    }, 1000);
  };

  return (
    <div>
      <button
        onClick={run}
        className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          hover:bg-blue-500
          transition
        "
      >
        Deploy Principal Engineer Profile
      </button>

      <div className="mt-8 space-y-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`
              rounded-lg
              border
              px-4
              py-2
              ${
                index <= current
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-white/10 text-slate-500"
              }
            `}
          >
            {index <= current ? "✓" : "○"} {step}
          </div>
        ))}
      </div>

      {complete && (
        <div className="mt-8">
          <div
            className="
              mb-4
              rounded-xl
              border
              border-emerald-500/30
              bg-emerald-500/10
              p-4
              text-emerald-400
            "
          >
            Platform deployment successful.
            Resume artifact is now available.
          </div>

          <a
            href="/resume.pdf"
            download
            className="
              inline-block
              rounded-xl
              bg-emerald-600
              px-6
              py-3
              font-semibold
              hover:bg-emerald-500
              transition
            "
          >
            Download Resume Artifact
          </a>
        </div>
      )}
    </div>
  );
}