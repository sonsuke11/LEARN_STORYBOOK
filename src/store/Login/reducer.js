import { actions } from "../../utils/constants";

export default function auth(state = {}, action) {
  switch (action.type) {
    case actions.SET_ACCESSTOKEN:
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
}
