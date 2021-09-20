import { useDispatch } from "react-redux";
import { store } from "../store";
import actionsDispatch from "../store/actions";

const useUser = () => {
  const dispatch = useDispatch();

  const loginUser = (params, onSuccess, onError) => {
    dispatch(actionsDispatch.Login(params, onSuccess, onError));
  };

  const registerUser = (params, onSuccess, onError) => {
    dispatch(actionsDispatch.Register(params, onSuccess, onError));
  };

  const getToken = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const token = store.getState();
    console.log(token.auth.accessToken);
    return token;
  };
  return { loginUser, registerUser, getToken };
};
export { useUser };
