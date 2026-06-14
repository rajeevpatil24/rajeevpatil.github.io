"use client";

import { profile } from "@/data/profile";

export default function SystemOverview() {
  return (
    <div className="border border-white/10 bg-white/5 rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-4">
        Career System Overview
      </h2>

      {/* EXPERIENCE */}
      <div className="mb-4">
        <div className="text-slate-400 text-sm">Experience</div>
        <div className="text-2xl font-bold text-emerald-400">
          {profile.impactSignals.experienceYears}+ Years
        </div>
      </div>

      {/* SUMMARY */}
      <p className="text-sm text-slate-300 mb-4">
        {profile.summary}
      </p>

      {/* CORE DOMAINS */}
      <div>
        <div className="text-slate-400 text-sm mb-2">
          Core Engineering Domains
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.coreDomains.map((d) => (
            <span
              key={d}
              className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-slate-300"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}