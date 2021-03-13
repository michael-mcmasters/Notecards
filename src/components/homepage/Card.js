import React from 'react';
import styled from "styled-components";

const Card = ({card}) => {
  return (
    <Container>
      {card.frontText}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem;
  max-width: 7rem;
  font-size: 0.6rem;
  border: 1px solid yellow;
`;

export default Card;