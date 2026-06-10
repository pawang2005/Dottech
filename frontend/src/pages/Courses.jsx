import { useEffect, useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import SectionHeading from "../components/SectionHeading";
import { featuredCourseCopy } from "../content";
import { getCourses } from "../services/api";

const levelOptions = ["All", "Beginner Friendly", "Intermediate", "Advanced"];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await getCourses();
        if (mounted) setCourses(Array.isArray(data) ? data : []);
      } catch {
        if (mounted) {
          setCourses([
            {
              _id: "featured-course",
              title: featuredCourseCopy.title,
              description: featuredCourseCopy.description,
              duration: featuredCourseCopy.duration,
              level: featuredCourseCopy.level,
              mode: featuredCourseCopy.mode,
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
            },
          ]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesQuery = `${course.title} ${course.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesLevel = level === "All" || course.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [courses, level, query]);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Courses"
          title="Explore our programs"
          description="Search and filter the live catalog. The first course is seeded from the brochure and stored in MongoDB."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-2 md:max-w-3xl">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          >
            {levelOptions.map((option) => (
              <option key={option} value={option} className="bg-[#0B1120]">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <LoadingSkeleton key={index} />
              ))
            : filteredCourses.map((course, index) => (
                <CourseCard key={course._id} course={course} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
}
