export default function AIControlPlanePage() {
  const layers = [
    "Users",
    "API Gateway",
    "LLM Gateway",
    "Guardrails",
    "Vector Database",
    "Model Router",
    "Foundation Models",
  ];

  const controls = [
    ["API Gateway", "Rate Limiting"],
    ["LLM Gateway", "Prompt Validation"],
    ["Guardrails", "Policy Enforcement"],
    ["Vector DB", "Access Control"],
    ["Tool Calling", "RBAC"],
    ["Models", "Output Filtering"],
  ];

  const threats = [
    {
      name: "Prompt Injection",
      mitigation: "Prompt isolation + validation",
    },
    {
      name: "RAG Poisoning",
      mitigation: "Trusted ingestion pipelines",
    },
    {
      name: "Tool Abuse",
      mitigation: "Permission boundaries",
    },
    {
      name: "Data Leakage",
      mitigation: "DLP + Guardrails",
    },
    {
      name: "Agent Hijacking",
      mitigation: "Workflow controls",
    },
  ];

  const skills = [
    ["Platform Engineering", "█████"],
    ["Kubernetes", "█████"],
    ["GitOps", "█████"],
    ["DevSecOps", "█████"],
    ["AI Platforms", "████"],
    ["AI Security", "████"],
    ["MLOps", "███"],
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Control Plane
      </h1>

      <p className="mt-4 text-slate-400 max-w-3xl">
        Secure enterprise AI platform architecture combining
        platform engineering, Kubernetes, DevSecOps,
        governance and operational guardrails.
      </p>

      {/* Architecture */}

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">
          Reference Architecture
        </h2>

        <div className="space-y-3 max-w-2xl">
          {layers.map((layer) => (
            <div
              key={layer}
              className="
                rounded-xl
                border
                border-cyan-500/20
                bg-cyan-500/5
                p-4
                text-center
              "
            >
              {layer}
            </div>
          ))}
        </div>
      </section>

      {/* Controls */}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Security Control Matrix
        </h2>

        <div className="space-y-3">
          {controls.map(([layer, control]) => (
            <div
              key={layer}
              className="
                flex
                justify-between
                border
                border-white/10
                rounded-lg
                p-4
              "
            >
              <span>{layer}</span>
              <span className="text-cyan-400">
                {control}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Threats */}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          AI Attack Surface
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {threats.map((threat) => (
            <div
              key={threat.name}
              className="
                border
                border-white/10
                rounded-xl
                p-5
                bg-white/5
              "
            >
              <h3 className="font-semibold">
                {threat.name}
              </h3>

              <p className="mt-2 text-slate-400 text-sm">
                {threat.mitigation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Capability Matrix
        </h2>

        <div className="space-y-3">
          {skills.map(([skill, level]) => (
            <div
              key={skill}
              className="flex justify-between"
            >
              <span>{skill}</span>
              <span className="text-cyan-400">
                {level}
              </span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}