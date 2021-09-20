import { all, fork } from "redux-saga/effects";
import loginSaga from "./Login/sagas";
function* rootSaga() {
  yield all([fork(loginSaga)]);
}
export default rootSaga;
