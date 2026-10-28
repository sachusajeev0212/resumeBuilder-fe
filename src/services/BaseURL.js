const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  "https://resumebuilder-be-oxow.onrender.com";

export const BASEURL = apiBaseUrl.replace(/\/+$/, "");