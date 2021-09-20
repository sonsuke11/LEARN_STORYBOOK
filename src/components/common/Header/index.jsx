import React from "react";
import styled from "styled-components";
import colors from "../../../themes/colors";
const Header = ({ items }) => {
  return (
    <WrapHeader>
      <Navbar>
        <Logo />
      </Navbar>
    </WrapHeader>
  );
};

export default Header;

const WrapHeader = styled.div`
  height: 50px;
  background-color: ${colors.danger};
`;

const Navbar = styled.div`
  max-width: 1200px;
  display: flex;
`;
const Logo = styled.span``;
