import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../services/api";

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/30"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={getAssetUrl(course.image)}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {course.level}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
          <span>{course.duration}</span>
          <span>{course.mode || "Flexible mode"}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
          {course.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <Link
            to={`/course/${course._id}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-400/30 hover:bg-sky-400/10"
          >
            View Details
            <FaArrowRight size={12} />
          </Link>
          <span className="text-xs uppercase tracking-[0.28em] text-sky-300">
            Open for admission
          </span>
        </div>
      </div>
    </motion.article>
  );
}
