import axios from "axios";
import { loginApi, registerApi } from "./login";
export const axiosClient = axios.create({
  baseURL: "https://protected-bastion-12711.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer" + localStorage.getItem("accessToken"),
  },
});

export const generalGet = (url, params) => {
  return axiosClient.get(url, params);
};

export const generalPost = (url, params) => {
  return axiosClient.post(url, params);
};
const api = {
  generalPost,
  generalGet,
  loginApi,
  registerApi,
};
export default api;
