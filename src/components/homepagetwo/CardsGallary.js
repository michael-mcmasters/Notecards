import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ deck, cardCountToShow }) => {
  const [cards, setCards] = useState(getCards(deck));
  const [absolutePos, setAbsolutePos] = useState(0);

  // Cards will slowly move to this position. -4 so that the last 4 cards stay on screen.
  const targetAbsolutePos = -25 * (cardCountToShow - 4);

  useEffect(() => {
    setAbsolutePos(targetAbsolutePos);
  }, [])

  function getCards(deck) {
    let cardsToShow = [];
    let index = 0;
    for (let i = 0; i < cardCountToShow; i++) {
      console.log(index);
      if (index >= deck.cards.length)
        index = 0;
      cardsToShow.push(deck.cards[index]);
      index++;
    }
    return cardsToShow;
  }

  let spaceBtwnCards = 0;
  return (
    < Wrapper >
      {cards.map((c, i) => {
        const element = <TinyCard key={i} card={c} xPosition={absolutePos + spaceBtwnCards} flipped={c.flipped} />
        spaceBtwnCards += 25;
        return element;
      })
      }
    </Wrapper >
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