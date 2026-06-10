import mongoose from "mongoose";

export default async function connectDb() {
//   if (!process.env.MONGODB_URI) {
//     console.warn(
//       "MONGODB_URI is not set. API routes will still load, but database calls will fail until it is configured.",
//     );
//     return;
//   }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");
}
