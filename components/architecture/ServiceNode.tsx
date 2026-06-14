export default function ServiceNode({ data }: any) {
  const color =
    data.status === "healthy"
      ? "border-emerald-400 text-emerald-300"
      : data.status === "degraded"
      ? "border-yellow-400 text-yellow-300"
      : "border-red-400 text-red-300";

  return (
    <div
      className={`px-4 py-2 rounded-lg border bg-[#0B1220] ${color}`}
    >
      <div className="font-semibold">{data.label}</div>
      <div className="text-xs opacity-70">{data.status}</div>
    </div>
  );
}