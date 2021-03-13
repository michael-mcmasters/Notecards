import React from 'react';
import styled from "styled-components";
import Card from "./Card.js";

const CardGallary = ({deck}) => {
  return (
    <Container>
      {/* {deck[0].frontText} */}
      {deck.cards[0].frontText}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

export default CardGallary;