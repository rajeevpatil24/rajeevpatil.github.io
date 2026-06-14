"use client";

import { useState } from "react";
import { Mail, Code2, Link, FileText } from "lucide-react";

export default function ContactPage() {
  const [eventSent, setEventSent] = useState(false);
  const [showBrief, setShowBrief] = useState(false);

  function triggerContactEvent() {
    setEventSent(true);
    setShowBrief(false);

    setTimeout(() => {
      setShowBrief(true);
    }, 3500);

    setTimeout(() => {
      setEventSent(false);
    }, 5000);
  }

  return (
    <main className="min-h-screen bg-[#070B14] text-white px-10 py-10">
      {/* HEADER */}
      <div className="border-b border-white/10 pb-6 mb-10">
        <h1 className="text-3xl font-bold">
          Recruiter Access Gateway
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Production endpoint for Platform Engineering, DevSecOps,
          Cloud Security and AI Infrastructure opportunities.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="border border-white/10 bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-semibold">
              RAJEEV PATIL
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-xs">
                Platform Engineering
              </span>

              <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-300 text-xs">
                AI Infrastructure
              </span>

              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 text-xs">
                DevSecOps
              </span>
            </div>

            <p className="text-slate-400 text-sm mt-4">
              Bangalore, India · +91-9538339994 ·
              Rajeev.patil1990@gmail.com
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>🔗 linkedin.com/in/rajeev-patil-rajeevpatil</p>
              <p>🌐 rajeevpatil24.github.io</p>
              <p>📘 Medium: AI Platform Engineering Articles</p>
              <p>💻 github.com/rajeevpatil24</p>
            </div>

            <div className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
              <p className="text-emerald-300 font-medium">
                ● Open To Opportunities
              </p>

              <p className="text-xs text-slate-400 mt-2">
                Platform Engineering • DevSecOps • Cloud Security •
                AI Infrastructure
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="space-y-3">
            <a
              href="mailto:Rajeev.patil1990@gmail.com"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Mail size={16} />
              Send Email
            </a>

            <a
              href="https://github.com/rajeevpatil24"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Code2 size={16} />
              GitHub Profile
            </a>

            <a
              href="https://linkedin.com/in/rajeev-patil-rajeevpatil"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Link size={16} />
              LinkedIn Profile
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition"
            >
              <FileText size={16} />
              View Resume Artifact
            </a>

            <a
              href="mailto:Rajeev.patil1990@gmail.com?subject=Platform Engineering Opportunity"
              className="
                flex items-center gap-3
                px-4 py-3
                rounded-lg
                border border-purple-500/30
                bg-purple-500/10
                text-purple-300
                hover:bg-purple-500/20
                transition
              "
            >
              🚀 Schedule Intro Call
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          {/* RECRUITER BRIEF */}
          <div className="border border-white/10 bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-semibold">
              Recruiter Brief Generator
            </h2>

            <p className="text-sm text-slate-400 mt-2">
              Generate a hiring summary optimized for Platform
              Engineering, DevSecOps and AI Infrastructure roles.
            </p>

            <div className="mt-8 space-y-3 text-sm font-mono">
              <div className={eventSent ? "text-emerald-400" : "text-slate-500"}>
                {eventSent
                  ? "✔ RECRUITER_REQUEST_RECEIVED"
                  : "○ waiting for recruiter request"}
              </div>

              <div className={eventSent ? "text-emerald-400" : "text-slate-500"}>
                {eventSent
                  ? "✔ PROFILE_DISCOVERY_COMPLETE"
                  : "○ candidate profile unavailable"}
              </div>

              <div className={eventSent ? "text-emerald-400" : "text-slate-500"}>
                {eventSent
                  ? "✔ CAREER_ARTIFACTS_ATTACHED"
                  : "○ artifacts unavailable"}
              </div>

              <div className={eventSent ? "text-emerald-400" : "text-slate-500"}>
                {eventSent
                  ? "✔ INTERVIEW_TRACKS_PREPARED"
                  : "○ awaiting evaluation"}
              </div>

              <div className={eventSent ? "text-emerald-400" : "text-slate-500"}>
                {eventSent
                  ? "✔ BRIEF_GENERATION_COMPLETE"
                  : "○ generation pending"}
              </div>
            </div>

            <button
              onClick={triggerContactEvent}
              className="
                mt-8
                w-full
                px-4
                py-3
                rounded-lg
                bg-blue-500/10
                border border-blue-500/30
                text-blue-300
                hover:bg-blue-500/20
                transition
              "
            >
              ▶ Generate Recruiter Brief
            </button>

            {showBrief && (
              <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <h3 className="text-lg font-semibold text-cyan-300">
                  Recruiter Brief Generated
                </h3>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Experience</span>
                    <span>13+ Years</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Primary Domain</span>
                    <span>Platform Engineering</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Focus Areas</span>
                    <span>DevSecOps & AI Infrastructure</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Status</span>
                    <span className="text-emerald-300">
                      Open To Opportunities
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-slate-400 mb-2">
                    Recommended Roles
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-xs">
                      Principal Platform Engineer
                    </span>

                    <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-300 text-xs">
                      Staff Platform Engineer
                    </span>

                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 text-xs">
                      DevSecOps Architect
                    </span>

                    <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 text-xs">
                      AI Infrastructure Engineer
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INTERVIEW SCHEDULING */}
          <div className="border border-purple-500/20 bg-purple-500/10 rounded-xl p-5">
            <h3 className="font-semibold text-purple-300">
              Interview Scheduling Endpoint
            </h3>

            <p className="text-sm text-slate-300 mt-2">
              Available for technical interviews, architecture reviews,
              leadership discussions and platform strategy conversations.
            </p>

            <div className="mt-4 text-sm space-y-2">
              <p>📅 Availability: Weekdays</p>
              <p>⏱ Typical Duration: 15–30 Minutes</p>
              <p>🌏 Timezone: IST (UTC +5:30)</p>
              <p>⚡ Response SLA: &lt; 24 Hours</p>

              <div className="pt-3 border-t border-white/10 mt-3">
                <p>🌍 Open To Global Opportunities</p>
                <p>🏠 Remote Friendly</p>
                <p>🏢 Hybrid Friendly</p>
                <p>✈ Relocation Considered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}