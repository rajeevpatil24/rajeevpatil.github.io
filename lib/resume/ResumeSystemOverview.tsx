"use client";

import { buildResumeFromCareer } from "@/lib/resume/buildResumeFromCareer";

export default function ResumeSystemOverview() {
  const resume = buildResumeFromCareer();

  return (
    <div className="border border-white/10 bg-white/5 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-2">
        Career System Overview
      </h2>

      <p className="text-sm text-slate-300 leading-relaxed">
        {resume.summary}
      </p>

      <div className="mt-4 text-xs text-slate-400">
        Auto-generated from Platform Deployments
      </div>
    </div>
  );
}