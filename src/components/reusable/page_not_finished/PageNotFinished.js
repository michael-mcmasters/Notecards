import React, { useContext } from 'react';
import styled from "styled-components";
import { ColorThemeContext } from "../../custom_hooks/ColorThemeContext";
import { Link } from "react-router-dom";

const PageNotFinished = () => {
  const theme = useContext(ColorThemeContext);

  return (
    <>
      <Header theme={theme}>
        This page is still a work in progress.
        <br />
        It will be completed soon.
        <br />
        Last worked on - 4/2/21.
    </Header>
      <LinkWrapper theme={theme}>
        <StyledLink to="/" theme={theme}>
          <p>Home</p>
        </StyledLink>
      </LinkWrapper>
    </>
  );
};

const Header = styled.h1`
  margin-top: 5rem;
  color: ${props => props.theme.secBtnText};
`;

const LinkWrapper = styled.div`
  margin-top: 5rem;
  `;

const StyledLink = styled(Link)`
  color: ${props => props.theme.blue};
  font-size: 2rem; 
`;

export default PageNotFinished;