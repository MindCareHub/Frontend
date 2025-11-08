import axios from "axios";

const API_URL = "https://backend-2-9u6b.onrender.com/chatbot";

const api = axios.create({
  baseURL: API_URL,
});

// Ajouter le token à chaque requête (JWT)
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

// Gestion des erreurs globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("Session expirée. Veuillez vous reconnecter.");
      window.location.href = "/login";
    } else {
      alert(error.response?.data?.detail || "Erreur serveur");
    }
    return Promise.reject(error);
  }
);

export const getSessions = async () => {
  const res = await api.get("/sessions");
  return res.data.sessions;
};

export const startSession = async (sessionTitle) => {
  const res = await api.post("/start", { session_title: sessionTitle });
  return res.data;
};

export const sendMessage = async (sessionId, message) => {
  const res = await api.post(`/${sessionId}/message`, { message });
  return res.data;
};

export const deleteSession = async (sessionId) => {
  await api.delete(`/${sessionId}`);
};

export default {
  getSessions,
  startSession,
  sendMessage,
  deleteSession,
};
