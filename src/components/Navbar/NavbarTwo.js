import React, { useContext } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorThemeContext } from "../custom_hooks/ColorThemeContext";

const NavbarTwo = () => {
  const theme = useContext(ColorThemeContext);

  return (
    // styled-components will not override Link's default styling, so must inline the styling instead.
    <Account theme={theme}>
      <Link to="/" style={{ color: theme.secBtnText, textDecoration: 'none' }}>
        Account
      </Link>
    </Account>
  );
};

const Account = styled(Link)`
  margin: 1em;
  padding: 0.7em 1.2em;
  width: fit-content;
  background-color: ${props => props.theme.secBtnBG};
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;
  
  position: fixed;
  right: 0;
  top: 0;
`;

export default NavbarTwo;