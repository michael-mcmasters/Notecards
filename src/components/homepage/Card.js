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
  margin: 0.5rem;
  padding: 1rem;
  max-width: 7rem;
  min-width: 7rem;
  font-size: 0.7rem;
  background-color: skyblue;
  border-radius: 10px;
`;

export default Card;