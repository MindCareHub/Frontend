import axios from "axios";

const API_URL = "https://backend-2-9u6b.onrender.com";

export const signup = async (email, username, password) => {
  return axios.post(`${API_URL}/auth/signup`, {
    email,
    username,
    password,
  });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
};

export const logout = async (token) => {
  return axios.post(
    `${API_URL}/auth/logout`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
