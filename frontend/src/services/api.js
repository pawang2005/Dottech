import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://dottech-brown.vercel.app/api";

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};

export const getCourseById = async (id) => {
  const { data } = await api.get(`/courses/${id}`);
  return data;
};

export const submitContact = async (payload) => {
  const { data } = await api.post("/contacts", payload);
  return data;
};

export const getAssetUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const trimmedBase = apiBaseUrl.replace(/\/api$/, "");
  return `${trimmedBase}${path}`;
};
