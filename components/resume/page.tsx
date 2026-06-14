import ResumeSystemOverview from "@/components/resume/ResumeSystemOverview";
import ResumeExperience from "@/components/resume/ResumeExperience";
import { buildResumeFromCareer } from "@/lib/resume/buildResumeFromCareer";

export default function Page() {
  const resume = buildResumeFromCareer();

  return (
    <main className="min-h-screen bg-[#070B14] text-white p-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Resume Control Plane
        </h1>
        <p className="text-slate-400">
          Generated from Career Deployment System
        </p>
      </div>

      {/* SUMMARY */}
      <ResumeSystemOverview />

      {/* SKILLS */}
      <div className="mt-8 border border-white/10 bg-white/5 rounded-xl p-6">
        <h2 className="font-semibold mb-3">Skills Graph</h2>

        <div className="flex flex-wrap gap-2">
          {resume.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Experience Execution History
        </h2>

        <ResumeExperience />
      </div>

      {/* CERTIFICATIONS */}
      <div className="mt-8 border border-white/10 bg-white/5 rounded-xl p-6">
        <h2 className="font-semibold mb-3">Certifications</h2>

        <ul className="text-sm text-slate-300 space-y-2">
          {resume.certifications.map((c) => (
            <li key={c}>• {c}</li>
          ))}
        </ul>
      </div>

    </main>
  );
}