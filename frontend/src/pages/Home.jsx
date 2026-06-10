import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import CourseCard from "../components/CourseCard";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Testimonials from "../components/Testimonials";
import LoadingSkeleton from "../components/LoadingSkeleton";
import {
  featuredCourseCopy,
  learningOutcomes,
  testimonials,
  toolCards,
  whyDotTech,
} from "../content";
import { getCourses } from "../services/api";

export default function Home() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await getCourses();
        if (!mounted) return;
        setCourse(Array.isArray(data) && data.length > 0 ? data[0] : null);
      } catch {
        if (mounted) setCourse(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const featuredCourse = course || {
    _id: "featured-course",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    level: featuredCourseCopy.level,
    duration: featuredCourseCopy.duration,
    mode: featuredCourseCopy.mode,
    title: featuredCourseCopy.title,
    description: featuredCourseCopy.description,
  };

  return (
    <>
      <Hero
        title="Master Generative AI Without Coding"
        subtitle={featuredCourseCopy.description}
      />

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Why DotTech
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Built for practical learning and career momentum
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {whyDotTech.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
              >
                <p className="text-base font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-course" className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Featured Course
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Generative AI Mastery Program
              </h2>
            </div>
            <div className="text-sm text-slate-400">
              Duration: 8 Weeks · Mode: Online / Offline · Level: Beginner
              Friendly
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <CourseCard course={featuredCourse} />
            )}

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <SectionHeading
                eyebrow="Learning Outcomes"
                title="Skills learners take away after the program"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {learningOutcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Tools Covered
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {toolCards.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(15,23,42,0.72))] px-4 py-4 text-center text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />
      <CTA title="Start Your AI Journey Today" />
    </>
  );
}
