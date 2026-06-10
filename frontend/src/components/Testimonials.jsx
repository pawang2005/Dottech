import { motion } from "framer-motion";

export default function Testimonials({ items = [] }) {
  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            What learners say
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <blockquote className="text-sm leading-7 text-slate-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-white">
                {item.name}
                <span className="block text-xs font-normal text-slate-400">
                  {item.role}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
