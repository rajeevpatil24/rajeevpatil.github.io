import CareerDeploymentCard from "@/components/career/CareerDeploymentCard";
import { deployments } from "@/data/career";

export default function CareerPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 py-16">

      <div className="mb-12">

        <p className="text-blue-400 tracking-[0.2em]">
          GITOPS CAREER TIMELINE
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Career Deployments
        </h1>

        <p className="text-slate-400 mt-4 max-w-3xl">
          Every role is represented as a deployed platform.
          Click a deployment manifest to execute the
          career workflow and inspect platform outcomes.
        </p>

      </div>

      <div className="space-y-8">

        {deployments.map((deployment) => (
          <CareerDeploymentCard
            key={deployment.id}
            deployment={deployment}
          />
        ))}

      </div>

    </main>
  );
}