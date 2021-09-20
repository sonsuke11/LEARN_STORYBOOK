import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { typeLoginForm } from "../../../utils/constants";
import colors from "../../../themes/colors";

const LoginForm = ({ type = typeLoginForm.login, children, onSubmit }) => {
  return (
    <LoginWrapper>
      <LoginBlock>
        <Title>{type}</Title>
        {children}
        <StyledParagraph>Forgot password ?</StyledParagraph>
        <ButtonWrap>
          <StyledButton width={150} label={type} onClick={onSubmit} />
        </ButtonWrap>
      </LoginBlock>
    </LoginWrapper>
  );
};

export default LoginForm;
const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
`;

const StyledParagraph = styled.a`
  cursor: pointer;
  color: ${colors.primary};
`;
const LoginBlock = styled.div`
  background-color: ${colors.white};
  padding: 12px 36px;
  width: 350px;
  border-radius: 10px;
`;
const Title = styled.h5`
  display: block;
  margin-block: 40px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;
const StyledButton = styled(Button)`
  display: block;
  width: 200px;
  margin-top: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;
