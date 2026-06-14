"use client";

import { useState } from "react";
import Link from "next/link";

import CVSystemOverview from "@/components/dashboard/SystemOverview";
import SystemHealth from "@/components/dashboard/SystemHealth";
import CareerEvidencePanel from "@/components/dashboard/CareerEvidencePanel";
import RunFeed from "@/components/dashboard/RunFeed";
import EventFeed from "@/components/dashboard/EventFeed";

export default function Page() {
  const [systemActive, setSystemActive] = useState(false);

  return (
    <main className="min-h-screen bg-[#070B14] text-white">

      {/* HEADER */}
      <div className="px-10 py-8 border-b border-white/10 bg-black/30 backdrop-blur">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          <div>
            <h1 className="text-3xl font-bold">
              Career Control Plane
            </h1>

            <p className="text-slate-400 mt-2 max-w-3xl">
              Interactive Platform Engineering operating system representing
              13+ years of cloud infrastructure, Kubernetes, GitOps,
              DevSecOps, observability, AI platform engineering and enterprise-scale delivery.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm">
                Platform Engineering
              </span>

              <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm">
                Kubernetes
              </span>

              <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm">
                GitOps
              </span>

              <span className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-sm">
                AI Platforms
              </span>

            </div>

            <div className="mt-5 flex items-center gap-3 flex-wrap">

              <button
                onClick={() => setSystemActive(true)}
                className="
                  px-4 py-2 rounded-lg
                  bg-blue-500/10
                  border border-blue-500/30
                  text-blue-300
                  hover:bg-blue-500/20
                  transition
                "
              >
                ▶ Run Career Simulation
              </button>

              <Link
                href="/career"
                className="
                  px-4 py-2 rounded-lg
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition
                "
              >
                View Career Deployments
              </Link>

              <Link
                href="/deploy-artifact"
                className="
                  px-4 py-2 rounded-lg
                  border border-emerald-500/20
                  bg-emerald-500/10
                  text-emerald-300
                "
              >
                Deploy Profile
              </Link>

            </div>

            <div className="mt-4">

              {!systemActive ? (
                <span className="text-xs text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded">
                  Waiting for system activation
                </span>
              ) : (
                <span className="text-xs text-emerald-300">
                  ● Platform Active (Streaming Career Signals)
                </span>
              )}

            </div>

          </div>

          {/* Quick Stats */}

          <div className="grid grid-cols-2 gap-3 min-w-[320px]">

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400 text-xs">
                Experience
              </p>
              <p className="text-2xl font-bold mt-1">
                13+
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400 text-xs">
                Enterprises
              </p>
              <p className="text-2xl font-bold mt-1">
                5
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400 text-xs">
                Platform State
              </p>
              <p className="text-emerald-400 font-semibold mt-1">
                Healthy
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400 text-xs">
                GitOps Sync
              </p>
              <p className="text-cyan-400 font-semibold mt-1">
                Synced
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* GRID */}

      <div className="p-10 grid grid-cols-12 gap-6">

        {/* LEFT */}

        <div className="col-span-12 lg:col-span-4 space-y-6">

          <CVSystemOverview  />
          <SystemHealth  />

        </div>

        {/* RIGHT */}

        <div className="col-span-12 lg:col-span-8 space-y-6">

          {!systemActive ? (
            <div className="border border-white/10 bg-white/5 rounded-xl p-10">

              <h2 className="text-xl font-semibold">
                Platform Overview
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                Principal-level platform engineering experience spanning cloud infrastructure,
                Kubernetes platforms, GitOps delivery, DevSecOps automation and AI platform enablement.
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-4">

                <div className="rounded-lg border border-white/10 p-4">
                  <h3 className="font-medium">
                    Cloud Native Platforms
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Kubernetes, Docker, Terraform, Helm, ArgoCD, GitOps
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 p-4">
                  <h3 className="font-medium">
                    AI Platform Engineering
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Kubeflow, MLflow, AI Infrastructure, MLOps Foundations
                  </p>
                </div>

              </div>

              <p className="text-xs text-slate-500 mt-6">
                Run the simulation to observe career deployments, platform events and operational signals.
              </p>

            </div>
          ) : (
            <>
              <CareerEvidencePanel />
              <RunFeed />
              <EventFeed />
            </>
          )}

        </div>

      </div>

    </main>
  );
}