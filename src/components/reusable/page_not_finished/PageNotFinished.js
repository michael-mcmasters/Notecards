import React, { useContext } from 'react';
import styled from "styled-components";
import { ColorThemeContext } from "../../custom_hooks/ColorThemeContext";
import { Link } from "react-router-dom";

const PageNotFinished = () => {
  const theme = useContext(ColorThemeContext);

  return (
    <>
      <Container>
        <Text theme={theme}>
          This page is a work in progress and will be completed soon.
          <br />
          <br />
          Last worked on - 4/2/21.
        </Text>
        <LinkWrapper theme={theme}>
          <StyledLink to="/" theme={theme}>
            <P>Home</P>
          </StyledLink>
        </LinkWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 10rem auto 5rem auto;
  width: 75%;
`;

const Text = styled.h1`
  margin-top: 0;
  color: ${props => props.theme.secBtnText};
`;

const LinkWrapper = styled.div`
  margin-top: 5rem;
  `;

const StyledLink = styled(Link)`
  color: ${props => props.theme.blue};
  font-size: 2rem; 
`;

const P = styled.p`
  margin: 0;
  margin-bottom: 1rem;
`;

export default PageNotFinished;