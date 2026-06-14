import { deployments } from "@/data/career";

type SkillBucket = {
  name: string;
  score: number;
  signals: string[];
};

export function buildSkillMatrix(): SkillBucket[] {
  const skillMap: Record<string, SkillBucket> = {};

  function add(skill: string, signal: string, weight: number) {
    if (!skillMap[skill]) {
      skillMap[skill] = { name: skill, score: 0, signals: [] };
    }

    skillMap[skill].score += weight;
    skillMap[skill].signals.push(signal);
  }

  deployments.forEach((d) => {
    const base = 2;

    d.tools.forEach((tool) => {
      switch (tool.toLowerCase()) {
        case "kubernetes":
          add("Kubernetes", d.company, 5);
          break;
        case "argocd":
          add("GitOps (ArgoCD)", d.company, 5);
          break;
        case "gitlab":
          add("CI/CD", d.company, 4);
          break;
        case "helm":
          add("Helm", d.company, 4);
          break;
        case "python":
          add("Automation (Python)", d.company, 4);
          break;
        case "aws":
          add("Cloud (AWS)", d.company, 4);
          break;
        case "grafana":
          add("Observability", d.company, 4);
          break;
        case "prometheus":
          add("Observability", d.company, 4);
          break;
        case "kubeflow":
        case "mlflow":
        case "sagemaker":
          add("AI Platforms", d.company, 5);
          break;
        default:
          add(tool, d.company, base);
      }
    });
  });

  return Object.values(skillMap).sort((a, b) => b.score - a.score);
}