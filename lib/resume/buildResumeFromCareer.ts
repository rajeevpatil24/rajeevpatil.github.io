import { deployments } from "@/data/career";

export function buildResumeFromCareer() {
  const skillsSet = new Set<string>();

  deployments.forEach((d) => {
    d.tools.forEach((t) => skillsSet.add(t));
  });

  return {
    summary:
      "Senior Platform Engineer with 13+ years experience building cloud-native platforms, Kubernetes ecosystems, DevSecOps frameworks, and AI platform infrastructure.",

    skills: Array.from(skillsSet).sort(),

    experience: deployments.map((d) => ({
      company: d.company,
      role: d.role,
      period: d.period,
      highlights: d.achievements,
      tech: d.tools,
    })),

    certifications: [
      "CKAD - Kubernetes",
      "AZ-500 Microsoft Security",
      "CEH - EC Council",
      "Helm & Kubernetes Practitioner",
    ],
  };
}