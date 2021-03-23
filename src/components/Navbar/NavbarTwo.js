import React, { useContext } from 'react';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ColorThemeContext } from "../custom_hooks/ColorThemeContext";
import { AiFillHome } from "react-icons/ai";

const NavbarTwo = () => {
  const theme = useContext(ColorThemeContext);

  return (
    <>
      <Home theme={theme}>
        <AiFillHome />
      </Home>
      {/* styled-components will not override Link's default styling, so must use inline styling. */}
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
`;

const Home = styled.div`
  ${ButtonStyling};
  
  position: fixed;
  top: 0;
  
  color: ${props => props.theme.secBtnText};
`;

const Account = styled(Link)`

  ${ButtonStyling};
    
  position: fixed;
  right: 0;
  top: 0;
`;

export default NavbarTwo;