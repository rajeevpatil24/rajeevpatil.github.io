import Link from "next/link";

const navItems = [
  { href: "/", label: "dashboard" },
  { href: "/career", label: "career" },
  { href: "/ai-control-plane", label: "ai-control-plane" },
  { href: "/deploy-artifact", label: "deploy-profile" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div>
          <p className="text-xs tracking-[0.2em] text-blue-400">
            PLATFORM CONTROL PLANE
          </p>

          <h1 className="text-lg font-bold">
            Rajeev Platform
          </h1>
        </div>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}