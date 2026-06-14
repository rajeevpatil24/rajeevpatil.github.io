type EventType =
  | "RUN_CREATED"
  | "RUN_STARTED"
  | "RUN_STAGE_STARTED"
  | "RUN_STAGE_COMPLETED"
  | "RUN_SUCCEEDED"
  | "RUN_FAILED";

type Listener = (payload: any) => void;

class GlobalBus {
  private listeners: Record<string, Listener[]> = {};

  emit(type: EventType, payload?: any) {
    (this.listeners[type] || []).forEach((l) => l(payload));
  }

  on(type: EventType, fn: Listener) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(fn);
  }
}

export const globalBus = new GlobalBus();