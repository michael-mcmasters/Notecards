import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ cards }) => {
  const [xPosition, setXPosition] = useState(50);
  const [containers, setContainers] = useState([
    {
      card: cards[0],
      xPosition: 1,
      transition: "",
      animation: "",
      flipped: cards[0].flipped,
    },
    {
      card: cards[1],
      xPosition: 1,
      transition: "",
      animation: "",
      flipped: cards[1].flipped,
    },
    {
      card: cards[2],
      xPosition: 1,
      transition: "",
      animation: "",
      flipped: cards[2].flipped,
    },
    {
      card: cards[3],
      xPosition: 1,
      transition: "",
      animation: "",
      flipped: cards[3].flipped,
    },
  ]);

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
      {containers.map((c, i) => {
        return <TinyCard key={i} card={c.card} xPosition={xPosition} flipped={c.flipped} />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: max-content;
  max-height: 8rem;
  transition: 0.39s ease;
  /* border: 1px solid teal;  */
`;

export default CardsGallary;