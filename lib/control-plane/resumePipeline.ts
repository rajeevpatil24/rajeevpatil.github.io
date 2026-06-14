import { globalEventBus } from "./globalEventBus";

export type ResumeRun = {
  id: string;
  status: "idle" | "running" | "success";
};

class ResumePipeline {
  private run: ResumeRun | null = null;

  start() {
    const id = crypto.randomUUID();

    this.run = {
      id,
      status: "running",
    };

    globalEventBus.emit(
      "RESUME_DEPLOYED",
      "PR created for resume artifact"
    );

    this.step("CI pipeline triggered");
    this.step("Docker image building");
    this.step("Kubernetes deployment");
    this.step("ArgoCD syncing");
    this.step("Artifact ready");

    setTimeout(() => {
      this.run!.status = "success";
      globalEventBus.emit(
        "RESUME_DEPLOYED",
        "Resume artifact successfully deployed"
      );

      this.downloadPDF();
    }, 4000);
  }

  private step(message: string) {
    setTimeout(() => {
      globalEventBus.emit("RESUME_DEPLOYED", message);
    }, Math.random() * 2500);
  }

  private downloadPDF() {
    const blob = new Blob(
      ["Resume Artifact Deployed Successfully"],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume-artifact.txt";
    a.click();
  }
}

export const resumePipeline = new ResumePipeline();