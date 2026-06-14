export const initialNodes = [
  {
    id: "api",
    position: { x: 250, y: 50 },
    data: { label: "API Gateway", status: "healthy" },
  },
  {
    id: "auth",
    position: { x: 100, y: 200 },
    data: { label: "Auth Service", status: "healthy" },
  },
  {
    id: "db",
    position: { x: 250, y: 350 },
    data: { label: "Database", status: "healthy" },
  },
  {
    id: "cache",
    position: { x: 400, y: 200 },
    data: { label: "Redis Cache", status: "healthy" },
  },
];

export const initialEdges = [
  { id: "e1", source: "api", target: "auth" },
  { id: "e2", source: "api", target: "db" },
  { id: "e3", source: "auth", target: "db" },
  { id: "e4", source: "api", target: "cache" },
];

// 👇 THIS IS NEW (dependency graph)
export const dependencyMap: Record<string, string[]> = {
  api: ["auth", "db", "cache"],
  auth: ["db"],
};