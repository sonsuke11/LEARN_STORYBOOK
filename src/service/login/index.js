import { generalPost } from "../api";

export const loginApi = (params) => {
  return generalPost("/auth/login", { ...params });
};
export const registerApi = (params) => {
  return generalPost("/auth/register", { ...params });
};
