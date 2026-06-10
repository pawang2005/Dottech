import Course from "../models/Course.js";

const defaultCourse = {
  title: "Generative AI Mastery Program",
  description:
    "Learn ChatGPT, Claude, Midjourney, DALL-E and other powerful AI tools in just 8 weeks. This beginner-friendly program focuses on practical AI workflows for content, automation and business use cases.",
  duration: "8 Weeks",
  level: "Beginner Friendly",
  fees: "Contact for fees",
  image: "/assets/genai-banner.svg",
  brochurePDF: "/brochure.pdf",
  googleFormLink:
    "https://docs.google.com/forms/d/1r0PZn75iXsbIBU6kH8yC0Jj-OaV6qKy6SB0XfMLNtQ4/viewform",
  learningOutcomes: [
    "Prompt Engineering",
    "Content Creation",
    "Workflow Automation",
    "AI Ethics",
    "AI Strategy",
  ],
  modules: [
    {
      title: "Week 1-2",
      points: [
        "AI Foundations",
        "Understanding models, prompts, and safe usage",
      ],
    },
    {
      title: "Week 3-4",
      points: [
        "Content Creation Tools",
        "Designing posts, videos, and images faster",
      ],
    },
    {
      title: "Week 5-6",
      points: [
        "Workflow Automation",
        "Building repeatable AI-assisted processes",
      ],
    },
    {
      title: "Week 7-8",
      points: [
        "Advanced Applications",
        "Project work, AI strategy, and portfolio prep",
      ],
    },
  ],
};

export async function seedCourse() {
  const existing = await Course.findOne({ title: defaultCourse.title });

  if (existing) {
    return existing;
  }

  return Course.create(defaultCourse);
}
