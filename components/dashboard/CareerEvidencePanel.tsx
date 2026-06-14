"use client";

import { profile } from "@/data/profile";
import { deployments } from "@/data/career";

export default function CareerEvidencePanel() {
  return (
    <div className="space-y-6">

      {/* CERTIFICATIONS */}
      <div className="border border-white/10 bg-white/5 rounded-xl p-6">
        <h3 className="text-sm uppercase text-slate-400 mb-3">
          Certifications
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          {profile.certifications.map((c) => (
            <li key={c} className="border-l border-emerald-500 pl-3">
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="border border-white/10 bg-white/5 rounded-xl p-6">
        <h3 className="text-sm uppercase text-slate-400 mb-3">
          Education
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          {profile.education.map((e) => (
            <li key={e} className="border-l border-blue-500 pl-3">
              {e}
            </li>
          ))}
        </ul>
      </div>

      {/* CAREER HIGHLIGHTS */}
      <div className="border border-white/10 bg-white/5 rounded-xl p-6">
        <h3 className="text-sm uppercase text-slate-400 mb-3">
          Career Highlights
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          {deployments.map((d) => (
            <li key={d.id} className="border-l border-purple-500 pl-3">
              <span className="text-white font-medium">{d.company}</span>
              <div className="text-xs text-slate-400">
                {d.role} • {d.period}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}