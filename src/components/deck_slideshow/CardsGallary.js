import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ deck, amntCardsToShow }) => {
  const [cards, setCards] = useState(getCards(deck.cards, amntCardsToShow));
  const [xPosition, setXPosition] = useState(5);

  // Cards will slowly move to this position.
  // (Move 25 units per card. Minus the last 4 so that they stay on screen. Plus 2 to offset CardsContainer's negative left margin.)
  const targetXPosition = -25 * (amntCardsToShow - 4) + 2;

  useEffect(() => {
    setXPosition(targetXPosition);
  }, [])

  // Returns an array of cards the length of amntCardsToShow. If deck doesn't have enough cards, repeats cards.
  function getCards(cards, amntCardsToShow) {
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
    <CardsContainer>
      {cards.map((c, i) => {
        const element = <TinyCard key={i} card={c} xPosition={xPosition + spaceBtwnCards} flipped={c.flipped} />
        spaceBtwnCards += 25;
        return element;
      })
      }
    </CardsContainer >
  );
};

// Negative left margin so cards appear to go inside of the deck.
// Use position relative for cards to use as anchor. (They are using position absolute).
const CardsContainer = styled.div`
  margin-left: -2rem;
  z-index: 0;

  position: relative;
  overflow: hidden;
  width: 40rem;
  max-width: 40rem;
  max-height: 8rem;
  
  @media(max-width: 800px) {
    display: none;
  }
`;

export default CardsGallary;