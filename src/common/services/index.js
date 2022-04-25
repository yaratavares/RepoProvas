import axios from "axios";

const BASE_URL = "http://localhost:5000";

function configToken(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function authLogin(values) {
  const { email, password } = values;
  return axios.post(`${BASE_URL}/sign-in`, { email, password });
}

function authSignUp(values) {
  const { email, password } = values;
  return axios.post(`${BASE_URL}/sign-up`, { email, password });
}

const api = { authLogin, authSignUp };

export default api;
