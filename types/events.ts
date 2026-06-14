export type SystemEvent =
  | "RUN_CREATED"
  | "RUN_STAGE"
  | "RUN_SUCCESS"
  | "RUN_FAILED"
  | "INCIDENT_TRIGGERED"
  | "INCIDENT_RESOLVED"
  | "RESUME_DEPLOYED"
  | "ARCH_UPDATED";

export type EventEntry = {
  id: string;
  type: SystemEvent;
  message: string;
  timestamp: number;
};