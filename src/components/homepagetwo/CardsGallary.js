import React, { useState } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ deck }) => {
  const [containers, setContainers] = useState([
    {
      cardIndex: 0,
      xPosition: 4,
      transition: "",
      animation: "",
      flipped: false,
    }
  ]);

  return (
    <Container>
      {deck.cards.map((card, i) => {
        if (i > 3) return;
        return <TinyCard key={i} card={card} xPosition={i + 0.1} flipped={card.flipped} />
      })}
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  border: 1px solid teal; 
`;

export default CardsGallary;