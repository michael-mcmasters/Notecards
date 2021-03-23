import React, { useContext } from 'react';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ColorThemeContext } from "../custom_hooks/ColorThemeContext";
import { AiFillHome } from "react-icons/ai";

const NavbarTwo = () => {
  const theme = useContext(ColorThemeContext);

  // Can't override <Link>'s default styling with styled-component CSS. So must use inline styling instead.
  return (
    <>
      <Home theme={theme}>
        <Link to="/">
          <AiFillHome style={{ color: theme.secBtnText, textDecoration: 'none' }} />
        </Link>
      </Home>
      <Account theme={theme}>
        <Link to="/" style={{ color: theme.secBtnText, textDecoration: 'none' }}>
          Account
      </Link>
      </Account>
    </>
  );
};

const ButtonStyling = css`
  margin: 1rem;
  padding: 0.7rem 1.2rem;
  width: fit-content;
  background-color: ${props => props.theme.secBtnBG};
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  position: fixed;
`;

const Home = styled.div`
  ${ButtonStyling};
  top: 0;
`;

const Account = styled(Link)`
  ${ButtonStyling};
  right: 0;
  top: 0;
`;

export default NavbarTwo;