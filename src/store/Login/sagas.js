import { takeLatest, call, put } from "redux-saga/effects";
import api from "../../service/api";
import { actions } from "../../utils/constants";
import { setAccessToken } from "./actions";

function* authLogin(action) {
  const { params, onSuccess, onError } = action?.payload;
  try {
    const res = yield call(api.loginApi, params);
    yield put(setAccessToken(res?.data?.accessToken));
    if (onSuccess) {
      onSuccess(res);
    }
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}

function* authRegister(action) {
  const { params, onError, onSuccess } = action?.payload;
  console.log(params);
  try {
    const res = yield call(api.registerApi, params);
    if (onSuccess) {
      onSuccess(res);
    }
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}
export default function* settingSaga() {
  yield takeLatest(actions.AUTH_LOGIN, authLogin);
  yield takeLatest(actions.AUTH_REGISTER, authRegister);
}
