import { EventEntry, SystemEvent } from "@/types/events";

type Listener = (event: EventEntry) => void;

class GlobalEventBus {
  private listeners: Listener[] = [];
  private events: EventEntry[] = []; // ✅ STORE EVENTS

  emit(type: SystemEvent, message: string) {
    const event: EventEntry = {
      id: crypto.randomUUID(),
      type,
      message,
      timestamp: Date.now(),
    };

    this.events.push(event); // ✅ persist
    this.listeners.forEach((l) => l(event));
  }

  on(listener: Listener) {
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // ✅ FIX: missing function
  getAll() {
    return this.events;
  }

  clear() {
    this.events = [];
  }
}

export const globalEventBus = new GlobalEventBus();