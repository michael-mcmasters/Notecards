import React from 'react';
import styled from "styled-components";
import Card from "./Card.js";

const CardGallary = ({deck}) => {
  return (
    <Container>
      {deck.cards.map((c, index) => (
        <Card
          key={index} 
          card={c}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 0.5rem;
`;

export default CardGallary;