import { deployments } from "@/data/career";

/**
 * CENTRAL CAREER GRAPH ENGINE
 * Turns resume → system intelligence
 */

export function getAllSkills() {
  const skillMap = new Map<string, number>();

  deployments.forEach((d) => {
    d.tools.forEach((tool) => {
      skillMap.set(tool, (skillMap.get(tool) || 0) + 1);
    });
  });

  return Array.from(skillMap.entries())
    .map(([skill, count]) => ({
      skill,
      weight: count,
    }))
    .sort((a, b) => b.weight - a.weight);
}

export function getLeadershipSignals() {
  return deployments.map((d) => ({
    company: d.company,
    role: d.role,
    impact: d.reliabilitySignals,
    scope: d.systemImpact,
  }));
}

export function getIncidentGraph() {
  return deployments.flatMap((d) =>
    (d.failureModes || []).map((f, idx) => ({
      id: `${d.id}-incident-${idx}`,
      source: d.company,
      message: f,
      severity:
        d.systemImpact?.criticality === "high"
          ? "critical"
          : "medium",
    }))
  );
}

export function getArchitectureNodes() {
  return deployments.map((d) => ({
    id: d.id,
    label: d.company,
    type: d.kind,
    status: "healthy",
    impact: d.impactAreas,
  }));
}

export function getCareerSummary() {
  return {
    totalCompanies: deployments.length,
    totalTools: new Set(deployments.flatMap((d) => d.tools)).size,
    totalIncidents: deployments.reduce(
      (acc, d) => acc + (d.failureModes?.length || 0),
      0
    ),
    domains: [
      "Platform Engineering",
      "DevSecOps",
      "AI Infrastructure",
      "Distributed Systems",
    ],
  };
}