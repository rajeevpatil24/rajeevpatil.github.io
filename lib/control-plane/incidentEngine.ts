import { systemEvents } from "./systemEvents";

export type Incident = {
  id: string;
  title: string;
  severity: "low" | "medium" | "critical";
  status: "open" | "resolved";
  logs: string[];
  createdAt: number;
};

class IncidentEngine {
  private incidents: Record<string, Incident> = {};

  trigger(title: string, severity: Incident["severity"]) {
    const incident: Incident = {
      id: crypto.randomUUID(),
      title,
      severity,
      status: "open",
      logs: [],
      createdAt: Date.now(),
    };

    this.incidents[incident.id] = incident;

    systemEvents.emit("INCIDENT_TRIGGERED", incident);

    this.simulate(incident);

    return incident;
  }

  private simulate(incident: Incident) {
    const steps = [
      "detecting anomaly...",
      "increasing error rate...",
      "routing traffic away...",
      "scaling recovery pods...",
      "rollback initiated...",
    ];

    let i = 0;

    const interval = setInterval(() => {
      incident.logs.push(steps[i]);

      if (i === steps.length - 1) {
        incident.status = "resolved";
        systemEvents.emit("INCIDENT_RESOLVED", incident);
        clearInterval(interval);
      }

      i++;
    }, 800);
  }

  list() {
    return Object.values(this.incidents);
  }
}

export const incidentEngine = new IncidentEngine();