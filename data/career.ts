export const deployments = [
  {
    id: "akamai",
    company: "Akamai Technologies",
    role: "Senior Platform Automation Engineer",
    period: "June 2020-June 2021 & Jul 2022 - Present",
    kind: "PlatformDeployment",
    environment: "production",

    summary:
      "Led enterprise-scale Kubernetes platform engineering, GitOps standardization, DevSecOps integration, and AI platform enablement across multi-tenant cloud environments.",

    impactAreas: [
      "Platform Engineering",
      "Kubernetes Architecture",
      "GitOps Standardization",
      "DevSecOps Automation",
      "AI/ML Platform Enablement",
      "Cloud Observability",
    ],

    yaml: `
apiVersion: platform.io/v1
kind: PlatformDeployment

metadata:
  name: akamai-platform

spec:
  cloud: aws
  tenancy: multi-tenant
  deploymentStrategy: gitops
  observability: enabled
  aiPlatform: enabled
`,

    tools: [
      "Kubernetes",
      "ArgoCD",
      "GitLab",
      "Helm",
      "Kyverno",
      "Grafana",
      "Prometheus",
      "Loki",
      "Python",
      "AWS",
      "Kubeflow",
      "MLflow",
      "SageMaker",
    ],

    achievements: [
      "Designed multi-tenant Kubernetes platform architectures",
      "Standardized GitOps workflows using GitLab CI/CD and ArgoCD",
      "Built reusable Helm-based deployment frameworks",
      "Implemented policy-as-code governance with Kyverno",
      "Integrated enterprise security tooling (Wiz, Snyk, SonarQube)",
      "Built AI/LLM platform enablement capabilities",
      "Implemented AI guardrails and evaluation pipelines",
      "Extended ML workflows using Kubeflow, MLflow, SageMaker",
    ],

    failureModes: [
      "GitOps drift between clusters causing deployment inconsistency",
      "RBAC misconfiguration leading to multi-tenant risk exposure",
      "Pipeline latency due to heavy CI/CD orchestration load",
      "Observability blind spots in cross-cluster deployments",
    ],

    systemImpact: {
      criticality: "high",
      blastRadius: "multi-cluster",
      dependencyDepth: "deep",
    },

    reliabilitySignals: [
      "Improved deployment consistency via ArgoCD standardization",
      "Reduced manual intervention via GitOps automation",
      "Improved security posture via policy-as-code enforcement",
    ],
  },

  {
    id: "safran",
    company: "Safran Engineering",
    role: "SDET II",
    period: "Sep 2021 - Jun 2022",
    kind: "EdgeDeployment",
    environment: "aviation-edge",

    summary:
      "Built automation frameworks for distributed aviation edge systems including Bluetooth, WiFi, and Raspberry Pi-based validation platforms.",

    impactAreas: [
      "Edge Computing",
      "Distributed Systems",
      "Automation Engineering",
      "Protocol Validation",
    ],

    yaml: `
apiVersion: edge.io/v1
kind: EdgeDeployment

metadata:
  name: aviation-edge-platform

spec:
  connectivity:
    - bluetooth
    - wifi
  edgeNodes:
    - raspberry-pi
`,

    tools: ["Python", "Pandas", "Bluetooth", "WiFi", "Raspberry Pi"],

    achievements: [
      "Built automation systems for aviation edge platforms",
      "Developed protocol validation frameworks",
      "Improved distributed edge reliability",
      "Created analytics tooling using Pandas",
    ],

    failureModes: [
      "Intermittent Bluetooth/WiFi connectivity drops in edge nodes",
      "Protocol mismatch across distributed device firmware versions",
      "Edge node desynchronization under load",
    ],

    systemImpact: {
      criticality: "medium",
      blastRadius: "edge-network",
      dependencyDepth: "medium",
    },

    reliabilitySignals: [
      "Improved edge validation coverage via automation",
      "Increased protocol stability across device fleet",
    ],
  },

  {
    id: "infoblox",
    company: "Infoblox",
    role: "Software Engineer II",
    period: "Feb 2018 - Jun 2020",
    kind: "InfrastructureAutomation",

    summary:
      "Developed Python-based automation and API validation systems for enterprise DNS and networking infrastructure with focus on reliability and security.",

    impactAreas: [
      "API Automation",
      "Infrastructure Reliability",
      "Security Validation",
      "Telemetry Systems",
    ],

    yaml: `
apiVersion: infra.io/v1
kind: InfrastructureAutomation

metadata:
  name: infoblox-network-platform

spec:
  automation: enabled
  telemetry: enabled
  securityValidation: enabled
`,

    tools: ["Python", "REST APIs", "Automation", "Security Validation"],

    achievements: [
      "Built Python automation frameworks",
      "Developed API validation systems",
      "Integrated vulnerability analysis workflows",
      "Improved telemetry-based observability",
    ],

    failureModes: [
      "API contract drift across distributed services",
      "Security validation gaps in automated workflows",
      "Telemetry data inconsistency under scale",
    ],

    systemImpact: {
      criticality: "high",
      blastRadius: "enterprise-network",
      dependencyDepth: "high",
    },

    reliabilitySignals: [
      "Improved API validation reliability",
      "Reduced manual verification overhead",
    ],
  },

  {
    id: "centurylink",
    company: "CenturyLink",
    role: "Software Test Engineer",
    period: "Nov 2014 - Feb 2018",
    kind: "ReliabilityEngineering",

    summary:
      "Worked on telecom-scale CI/CD pipelines and distributed system reliability engineering with focus on release stability and automation.",

    impactAreas: [
      "CI/CD Engineering",
      "Release Reliability",
      "Microservices Testing",
      "Automation Systems",
    ],

    yaml: `
apiVersion: telecom.io/v1
kind: ReliabilityEngineering

metadata:
  name: telecom-platform

spec:
  scale: enterprise
  ciCd: enabled
  resiliency: enabled
`,

    tools: ["CI/CD", "Automation", "Microservices"],

    achievements: [
      "Supported telecom-scale distributed systems",
      "Improved release reliability via automation",
      "Enhanced CI/CD validation pipelines",
    ],

    failureModes: [
      "Release pipeline instability under high deployment frequency",
      "Microservice version mismatch in distributed rollout",
    ],

    systemImpact: {
      criticality: "high",
      blastRadius: "global-telecom",
      dependencyDepth: "very-high",
    },

    reliabilitySignals: [
      "Improved release stability",
      "Reduced deployment failure rate",
    ],
  },

  {
    id: "thomson-reuters",
    company: "Thomson Reuters",
    role: "Systems Engineer",
    period: "Apr 2013 - Nov 2014",
    kind: "SystemBootstrap",

    summary:
      "Supported enterprise system deployments and early-stage reliability engineering for high-availability distributed systems.",

    impactAreas: [
      "Enterprise Systems",
      "Release Engineering",
      "System Stability",
    ],

    yaml: `
apiVersion: enterprise.io/v1
kind: SystemBootstrap

metadata:
  name: enterprise-platform

spec:
  availability: high
  readiness: operational
`,

    tools: ["Enterprise Systems", "Release Engineering"],

    achievements: [
      "Supported enterprise platform deployments",
      "Improved release quality and stability",
    ],

    failureModes: [
      "Deployment inconsistencies in early enterprise systems",
      "Manual release errors in legacy pipelines",
    ],

    systemImpact: {
      criticality: "medium",
      blastRadius: "enterprise-core",
      dependencyDepth: "medium",
    },

    reliabilitySignals: [
      "Improved system readiness",
      "Reduced deployment errors",
    ],
  },
];