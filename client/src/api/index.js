import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const insertMovie = payload => api.post(`/movie`, payload);
export const getAllFood = () => api.get(`/allFood`);
export const updateMovieById = (id, payload) =>
  api.put(`/movie/${id}`, payload);
export const deleteMovieById = id => api.delete(`/movie/${id}`);
export const getMovieById = id => api.get(`/movie/${id}`);

const apis = {
  insertMovie,
  getAllFood,
  updateMovieById,
  deleteMovieById,
  getMovieById
};

export default apis;
