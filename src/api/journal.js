import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL:  "https://backend-2-9u6b.onrender.com/journal",
});

// Intercepteur pour ajouter le token à chaque requête
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

// Intercepteur pour gérer les erreurs globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expirée. Veuillez vous reconnecter.");
      window.location.href = "/login"; // redirige vers login
    } else {
      toast.error(error.response?.data?.detail || "Erreur serveur");
    }
    return Promise.reject(error);
  }
);

export const getJournalEntries = async (limit = 10, offset = 0) => {
  const res = await api.get("/", { params: { limit, offset } });
  return res.data;
};

export const createJournalEntry = async (entryText) => {
  const res = await api.post("/", { entry_text: entryText });
  return res.data;
};

export default api;
