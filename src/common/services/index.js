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
  return axios.get(`${BASE_URL}/filter/disciplines`, config(token));
}

function searchDisciplines(token, words) {
  return axios.get(`${BASE_URL}/filter/disciplines/${words}`, config(token));
}

function getTeachers(token) {
  return axios.get(`${BASE_URL}/filter/teachers`, config(token));
}

function searchTeachers(token, words) {
  return axios.get(`${BASE_URL}/filter/teachers/${words}`, config(token));
}

function getAllCategories(token) {
  return axios.get(`${BASE_URL}/categories`, config(token));
}

function getAllDisciplines(token) {
  return axios.get(`${BASE_URL}/disciplines`, config(token));
}

function getAllTeachers(token) {
  return axios.get(`${BASE_URL}/teachers`, config(token));
}

function addNewtest(data, token) {
  return axios.post(`${BASE_URL}/tests`, data, config(token));
}

const inputAddInformations = {
  getAllCategories,
  getAllDisciplines,
  getAllTeachers,
};

const api = {
  authLogin,
  authSignUp,
  getDisciplines,
  getTeachers,
  searchDisciplines,
  searchTeachers,
  inputAddInformations,
  addNewtest,
};

export default api;
