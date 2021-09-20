import { actions } from "../../utils/constants";

export const Login = (params, onSuccess, onError) => {
  return { type: actions.AUTH_LOGIN, payload: { params, onSuccess, onError } };
};
export const Register = (params, onSuccess, onError) => {
  return {
    type: actions.AUTH_REGISTER,
    payload: { params, onSuccess, onError },
  };
};
export const setAccessToken = (token) => {
  return { type: actions.SET_ACCESSTOKEN, payload: token };
};
