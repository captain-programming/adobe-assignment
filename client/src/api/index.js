import axios from "axios";

const API = axios.create({baseURL: "https://lazy-cyan-donkey-sock.cyclic.app/"});

//posts
export const fetchPost = () => API.get('/analytics/posts');
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const increaseLike = (id) => API.put(`/posts/${id}/like`);
export const decreaseLike = (id) => API.put(`/posts/${id}/unlike`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const editPost = (id, data) => API.put(`/posts/${id}`, data);
export const createPost = (data) => API.post(`/posts`, data);


//users
export const fetchUser = () => API.get('/analytics/users');