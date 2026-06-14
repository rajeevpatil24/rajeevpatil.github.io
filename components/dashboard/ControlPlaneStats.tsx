export default function ControlPlaneStats() {
  const stats = [
    {
      title: "Deployments",
      value: "5",
    },
    {
      title: "Experience",
      value: "13+ Years",
    },
    {
      title: "GitOps Sync",
      value: "Healthy",
    },
    {
      title: "Platform State",
      value: "Running",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-xl
          "
        >
          <p className="text-slate-400 text-sm">
            {stat.title}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}