import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { googleFormLink } from "../content";

const stats = [
  { value: "8 Weeks", label: "Structured training" },
  { value: "Beginner", label: "Friendly learning path" },
  { value: "AI Tools", label: "ChatGPT to Canva AI" },
];

export default function Hero({
  title,
  subtitle,
  primaryLabel = "Enroll Now",
  secondaryLabel = "Explore Course",
}) {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(0,153,255,0.2),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(30,41,59,0.95),_transparent_38%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24">
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200"
          >
            Future-ready AI academy
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={googleFormLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              {primaryLabel}
              <FaArrowRight size={14} />
            </a>
            <a
              href="#featured-course"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FaPlayCircle size={14} />
              {secondaryLabel}
            </a>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-sky-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.78)] p-4 shadow-2xl shadow-sky-950/40 backdrop-blur-xl sm:p-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="Futuristic AI learning"
                className="h-[420px] w-full object-cover opacity-90"
              />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                  Live tools
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ChatGPT, Claude, Midjourney
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                  Career track
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Learn, practice, and build a portfolio
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
