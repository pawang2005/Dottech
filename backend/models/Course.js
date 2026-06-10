import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    points: [{ type: String, required: true }],
  },
  { _id: false },
);

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    fees: { type: String, default: "Contact for fees" },
    image: { type: String, required: true },
    brochurePDF: { type: String, default: "/brochure.pdf" },
    googleFormLink: { type: String, required: true },
    learningOutcomes: [{ type: String, required: true }],
    modules: [moduleSchema],
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  },
);

courseSchema.index({
  title: "text",
  description: "text",
  level: "text",
  duration: "text",
});

export default mongoose.model("Course", courseSchema);
