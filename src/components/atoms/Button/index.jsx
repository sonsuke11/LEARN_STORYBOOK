import React from "react";
import styled from "styled-components";
import colors from "../../../themes/colors";
import { hexToRGBA } from "../../../utils/helper";

const Button = ({ onClick, label = "button", width = 100 }) => {
  return (
    <StyledButton theme={{ width }} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: ${(props) => props.theme.width + "px"};
  display: block;
  height: 40px;
  font-size: 14px;
  background-color: ${colors.primary};
  border-radius: 10px;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${hexToRGBA(colors.primary, 0.9)};
  }
`;
