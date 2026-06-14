export default function CareerTimeline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">

      <div
        className="
          absolute
          left-8
          top-0
          bottom-0
          w-px
          bg-gradient-to-b
          from-cyan-500
          via-blue-500
          to-purple-500
        "
      />

      <div className="space-y-8">
        {children}
      </div>

    </div>
  );
}