"use client";

import { buildResumeFromCareer } from "@/lib/resume/buildResumeFromCareer";

export default function ResumeExperience() {
  const resume = buildResumeFromCareer();

  return (
    <div className="space-y-6">
      {resume.experience.map((exp, idx) => (
        <div
          key={idx}
          className="border border-white/10 bg-white/5 rounded-xl p-5"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-sm text-slate-400">{exp.role}</p>
            </div>

            <span className="text-xs text-blue-400">
              {exp.period}
            </span>
          </div>

          <ul className="mt-4 space-y-2">
            {exp.highlights.map((h, i) => (
              <li key={i} className="text-sm text-slate-300">
                • {h}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}