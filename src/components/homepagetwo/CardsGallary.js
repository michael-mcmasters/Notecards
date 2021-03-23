import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ cards }) => {
  const [xPosition, setXPosition] = useState(50);

  console.log(cards)

  useEffect(() => {
    setXPosition(-100);
  }, [])

  // const handleMoveCards = () => {
  //   setXPosition(prev => prev - 2);
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("interval")
  //     handleMoveCards();
  //   }, [1000])

  //   return () => clearInterval(interval);

  // }, [])


  return (
    // <Container>
    //   {deck.cards.map((card, i) => {
    //     if (i > 3) return;
    //     return <TinyCard key={i} card={card} xPosition={i + 0.1} flipped={card.flipped} />
    //   })}
    // </Container>

    <Wrapper>
      {cards.map((c, i) => {
        console.log(c);
        return <TinyCard key={i} card={c} xPosition={xPosition} flipped={c.flipped} />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 40rem;
  max-width: 40rem;
  max-height: 8rem;
  border: 1px solid teal; 
`;

export default CardsGallary;