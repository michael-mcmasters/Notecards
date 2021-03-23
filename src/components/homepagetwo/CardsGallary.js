import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ deck, amntCardsToShow }) => {
  const [cards, setCards] = useState(getRowOfCards(deck.cards, amntCardsToShow));
  const [absolutePos, setAbsolutePos] = useState(0);

  // Cards will slowly move to this position. -4 so that the last 4 cards stay on screen.
  const targetAbsolutePos = -25 * (amntCardsToShow - 4);

  useEffect(() => {
    setAbsolutePos(targetAbsolutePos);
  }, [])

  // Returns an array of cards the length of amntCardsToShow. If deck doesn't have enough cards, repeats cards.
  function getRowOfCards(cards, amntCardsToShow) {
    let cardsToShow = [];
    let cardIndx = 0;
    let amnt = 0;
    while (amnt < amntCardsToShow) {
      if (cardIndx >= cards.length) {
        cardIndx = 0;
      }
      cardsToShow.push(cards[cardIndx]);
      cardIndx++;
      amnt++;
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