import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/Input";
import LoginForm from "../../components/common/LoginForm";
import { useUser } from "../../hook/useUser";
import { isEmpty } from "../../themes/validation";
const Login = () => {
  const { loginUser } = useUser();
  const [loginData, setLoginData] = useState({});
  const [errorMessage, setError] = useState({ userName: "", password: "" });
  const validate = () => {
    const { userName, password } = loginData;
    const error = {};
    if (!userName) {
      error.userName = "User name is required";
    }
    if (!password) {
      error.password = "Password is required";
    }
    setError(error);
    return isEmpty(error);
  };
  const handleSubmitClick = () => {
    if (validate())
      loginUser(
        loginData,
        () => {},
        () => {}
      );
  };
  return (
    <LoginForm type="Login" onSubmit={handleSubmitClick}>
      <Input
        label="User Name"
        value={loginData?.userName}
        onChange={(value) => setLoginData({ ...loginData, userName: value })}
        error={errorMessage.userName}
      />
      <StyledInput
        label="Password"
        value={loginData?.password}
        onChange={(value) => setLoginData({ ...loginData, password: value })}
        error={errorMessage.password}
      />
    </LoginForm>
  );
};

export default Login;

const StyledInput = styled(Input)`
  margin-bottom: 0;
`;
