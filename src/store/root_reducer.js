import { combineReducers } from "redux";
import auth from "./Login/reducer";
const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
