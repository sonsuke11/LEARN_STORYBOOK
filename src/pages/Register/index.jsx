import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import LoginForm from "../../components/common/LoginForm";
import { isEmpty } from "../../themes/validation";
import { useUser } from "../../hook/useUser";

const Register = () => {
  const { registerUser } = useUser();
  const [register, setRegister] = useState({});
  const [error, setError] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const validate = () => {
    const { userName, password, confirmPassword } = register;
    const error = {};
    if (!userName) {
      error.userName = "User name is required";
    }
    if (!password) {
      error.password = "Password is required";
    }
    if (!confirmPassword) {
      error.confirmPassword = "Confirm password is required";
    }
    if (password && confirmPassword !== password) {
      error.confirmPassword = "Confirm password is not match password";
    }

    setError(error);
    return isEmpty(error);
  };
  const handleSubmitClick = () => {
    if (validate()) {
      registerUser(register);
    }
  };

  return (
    <LoginForm type="Register" onSubmit={handleSubmitClick}>
      <Input
        label="User Name"
        value={register?.userName}
        onChange={(value) => setRegister({ ...register, userName: value })}
        error={error.userName}
      />
      <Input
        label="Password"
        value={register?.password}
        onChange={(value) => setRegister({ ...register, password: value })}
        error={error.password}
      />
      <Input
        label="confirm Password"
        value={register?.confirmPassword}
        onChange={(value) =>
          setRegister({ ...register, confirmPassword: value })
        }
        error={error.confirmPassword}
      />
    </LoginForm>
  );
};

export default Register;
