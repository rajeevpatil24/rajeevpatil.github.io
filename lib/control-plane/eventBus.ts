type EventType =
  | "RUN_CREATED"
  | "STAGE_STARTED"
  | "STAGE_COMPLETED"
  | "RUN_SUCCESS"
  | "RUN_FAILED";

type Listener = (payload: any) => void;

class EventBus {
  private listeners: Record<string, Listener[]> = {};

  emit(type: EventType, payload?: any) {
    (this.listeners[type] || []).forEach((l) => l(payload));
  }

  on(type: EventType, listener: Listener) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(listener);
  }
}

export const eventBus = new EventBus();