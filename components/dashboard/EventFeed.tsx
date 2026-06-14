"use client";

import { useEffect, useState } from "react";
import { globalEventBus } from "@/lib/control-plane/globalEventBus";
import { EventEntry } from "@/types/events";

export default function EventFeed() {
  const [events, setEvents] = useState<EventEntry[]>([]);

  useEffect(() => {
    setEvents(globalEventBus.getAll());

    return globalEventBus.on((event) => {
      setEvents((prev) => [event, ...prev].slice(0, 20));
    });
  }, []);

  return (
    <div className="border border-white/10 bg-white/5 rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">
        System Event Stream
      </h2>

      <div className="space-y-2">
        {events.map((e) => (
          <div key={e.id} className="text-sm text-slate-300">
            {e.message}
          </div>
        ))}
      </div>
    </div>
  );
}