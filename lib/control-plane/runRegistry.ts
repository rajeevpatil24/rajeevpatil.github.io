export type Run = {
  id: string;
  type: "career" | "resume" | "incident" | "architecture";
  status: "running" | "success" | "failed";
  logs: string[];
  stage: number;
  createdAt: number;
};

class RunRegistry {
  private runs: Record<string, Run> = {};

  create(run: Run) {
    this.runs[run.id] = run;
  }

  update(id: string, patch: Partial<Run>) {
    this.runs[id] = { ...this.runs[id], ...patch };
  }

  get(id: string) {
    return this.runs[id];
  }

  list() {
    return Object.values(this.runs).sort(
      (a, b) => b.createdAt - a.createdAt
    );
  }
}

export const runRegistry = new RunRegistry();