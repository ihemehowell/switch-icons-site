import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/docs/getting-started", label: "Getting Started" },
  { to: "/docs/installation", label: "Installation" },
  { to: "/docs/api", label: "API Reference" },
  { to: "/icons", label: "Icons" },
  { to: "/playground", label: "Playground" },
];

export function Nav() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-slate-900 text-lg">
          Switch Icons
        </NavLink>
        <nav className="flex items-center gap-1 flex-wrap">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded-lg transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}