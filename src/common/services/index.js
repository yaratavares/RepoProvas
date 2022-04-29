import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function config(token) {
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

function getDisciplines(token) {
  return axios.get(`${BASE_URL}/disciplines`, config(token));
}

function getTeachers(token) {
  return axios.get(`${BASE_URL}/teachers`, config(token));
}

const api = { authLogin, authSignUp, getDisciplines, getTeachers };

export default api;
