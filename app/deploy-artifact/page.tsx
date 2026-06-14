import DeployArtifact from "@/components/resume/DeployArtifact";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-10">
        Resume Artifact Deployment
      </h1>
    <p className="mt-3 text-slate-400 max-w-2xl">
  Click the deployment button below to simulate a production GitOps
  workflow. The pipeline will provision infrastructure, synchronize
  platform services, validate security controls, and generate a
  downloadable resume artifact.
</p>
      <DeployArtifact />
    </main>
  );
}