"use client";

import { resumePipeline } from "@/lib/control-plane/resumePipeline";

export default function DeployResumeButton() {
  return (
    <button
      onClick={() => resumePipeline.start()}
      className="px-6 py-3 rounded-xl bg-blue-500/20 border border-blue-400 text-blue-300 hover:bg-blue-500/30 transition"
    >
      Deploy Resume Artifact
    </button>
  );
}