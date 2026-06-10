import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { googleFormLink } from "../content";

export default function CTA({ title = "Start Your AI Journey Today" }) {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(0,153,255,0.18),rgba(5,8,22,0.98))] p-8 shadow-glow sm:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
                Admission open
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                {title}
              </h2>
            </div>
            <a
              href={googleFormLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-[#050816] transition hover:bg-slate-100 cta"
            >
              Enroll Now
              <FaArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
