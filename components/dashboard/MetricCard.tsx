import GlassCard from "@/components/shared/GlassCard";

export default function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <GlassCard>
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>
    </GlassCard>
  );
}