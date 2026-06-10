import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { googleFormLink } from "../content";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 shadow-glow">
            <span className="font-display text-lg font-bold text-white">D</span>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-white">
              DotTech Academy
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300/80">
              AI Learning
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={linkClass}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={googleFormLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-sky-400/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300 hover:bg-sky-400/10"
          >
            Enroll Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0B1120]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className={linkClass}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={googleFormLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
