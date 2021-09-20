import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../hook/useUser";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { getToken } = useUser();
  const isLogin = () => {
    const login = getToken();
    return Boolean(login);
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
