import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import CTA from "../components/CTA";
import LoadingSkeleton from "../components/LoadingSkeleton";
import SectionHeading from "../components/SectionHeading";
import { featuredCourseCopy, googleFormLink } from "../content";
import { getAssetUrl, getCourseById } from "../services/api";

const fallbackCourse = {
  _id: "featured-course",
  title: featuredCourseCopy.title,
  description: featuredCourseCopy.description,
  duration: featuredCourseCopy.duration,
  level: featuredCourseCopy.level,
  fees: "Contact for fees",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  brochurePDF: "/brochure.pdf",
  googleFormLink,
  learningOutcomes: featuredCourseCopy.outcomes,
  modules: featuredCourseCopy.modules,
};

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await getCourseById(id);
        if (mounted) setCourse(data);
      } catch {
        if (mounted) setCourse(fallbackCourse);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [id]);

  const resolvedCourse = useMemo(() => course || fallbackCourse, [course]);

  if (loading) return <LoadingSkeleton variant="detail" />;

  return (
    <>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[280px] lg:min-h-[520px]">
                <img
                  src={getAssetUrl(resolvedCourse.image)}
                  alt={resolvedCourse.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                  Course details
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                  {resolvedCourse.title}
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {resolvedCourse.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Duration
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {resolvedCourse.duration}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Fees
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {resolvedCourse.fees || "Contact us"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 px-4 py-2">
                    {resolvedCourse.level}
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2">
                    {resolvedCourse.mode || "Online / Offline"}
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2">
                    Beginner friendly
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={resolvedCourse.googleFormLink || googleFormLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                  >
                    Enroll Now
                  </a>
                  <a
                    href={getAssetUrl(
                      resolvedCourse.brochurePDF || "/brochure.pdf",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Brochure Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <SectionHeading
                eyebrow="Learning Outcomes"
                title="What students will achieve"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {(
                  resolvedCourse.learningOutcomes || featuredCourseCopy.outcomes
                ).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <SectionHeading
                eyebrow="Course Modules"
                title="8-week structure"
              />
              <div className="mt-5 space-y-4">
                {(resolvedCourse.modules || featuredCourseCopy.modules).map(
                  (module) => (
                    <div
                      key={module.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <p className="font-semibold text-white">{module.title}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-300">
                        {module.points?.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/10 px-3 py-1.5"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA title="Start Your AI Journey Today" />
    </>
  );
}
