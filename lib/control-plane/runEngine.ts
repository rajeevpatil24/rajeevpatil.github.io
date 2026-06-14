import { eventBus } from "./eventBus";

const stages = [
  "git_commit",
  "docker_build",
  "helm_package",
  "terraform_apply",
  "kubectl_apply",
  "argocd_sync",
];

export type Run = {
  id: string;
  status: "running" | "success" | "failed";
  logs: string[];
  stageIndex: number;
};

class RunEngine {
  private runs: Record<string, Run> = {};

  startRun(): Run {
    const run: Run = {
      id: crypto.randomUUID(),
      status: "running",
      logs: [],
      stageIndex: 0,
    };

    this.runs[run.id] = run;

    eventBus.emit("RUN_CREATED", run);

    this.execute(run);

    return run;
  }

  private execute(run: Run) {
    let i = 0;

    const interval = setInterval(() => {
      const stage = stages[i];

      eventBus.emit("STAGE_STARTED", { runId: run.id, stage });

      run.logs.push(`[${stage}] executing...`);
      run.stageIndex = i;

      eventBus.emit("STAGE_COMPLETED", { runId: run.id, stage });

      if (i === stages.length - 1) {
        run.status = "success";
        eventBus.emit("RUN_SUCCESS", run);
        clearInterval(interval);
      }

      i++;
    }, 700);
  }

  getRun(id: string) {
    return this.runs[id];
  }
}

export const runEngine = new RunEngine();