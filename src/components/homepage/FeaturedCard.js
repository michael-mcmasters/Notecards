import React from 'react';
import styled from "styled-components";

const FeaturedCard = () => {
  return (
    <Container>
      <Header>
        Featured Card!
      </Header>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  border: 1px solid red;
`;

const Header = styled.h1`
  
`;



export default FeaturedCard;