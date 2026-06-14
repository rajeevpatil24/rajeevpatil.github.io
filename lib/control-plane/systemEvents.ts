export type SystemEvent =
  | "INCIDENT_TRIGGERED"
  | "INCIDENT_RESOLVED"
  | "NODE_HEALTH_CHANGE"
  | "ARCHITECTURE_UPDATED";

type Listener = (payload: any) => void;

class SystemEventBus {
  private listeners: Record<string, Listener[]> = {};

  emit(type: SystemEvent, payload?: any) {
    (this.listeners[type] || []).forEach((l) => l(payload));
  }

  on(type: SystemEvent, fn: Listener) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(fn);
  }
}

export const systemEvents = new SystemEventBus();