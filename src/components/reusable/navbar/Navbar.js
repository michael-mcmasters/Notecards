import React, { useContext } from 'react';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ColorThemeContext } from "../../custom_hooks/ColorThemeContext";
import { AiFillHome } from "react-icons/ai";

const NavbarTwo = () => {
  const theme = useContext(ColorThemeContext);

  return (
    <Container>

      <StyledLink theme={theme} to="/">
        <Home theme={theme}>
          <AiFillHome />
        </Home>
      </StyledLink>

      <StyledLink theme={theme} to="/account">
        <Account theme={theme}>
          Sign up
      </Account>
      </StyledLink>

    </Container>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  padding: 1rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 5;
`;

const ButtonStyling = css`
  color: ${props => props.theme.secBtnText};
  padding: 0.7rem 1.2rem;
  width: fit-content;
  background-color: ${props => props.theme.secBtnBG};
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid ${props => props.theme.secBtnBG};;
  
  &:focus, &:hover {
    border: 2px solid ${props => props.theme.secBtnText};
    outline: none;
  }
`;

const Home = styled.button`
  ${ButtonStyling};
`;

const Account = styled.button`
  ${ButtonStyling};
`;

export default NavbarTwo;