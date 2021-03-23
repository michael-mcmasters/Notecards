import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ deck, amntCardsToShow }) => {
  const [cards, setCards] = useState(getCards(deck.cards, amntCardsToShow));
  const [xPosition, setXPosition] = useState(0);

  // Cards will slowly move to this position. -4 so that the last 4 cards stay on screen.
  const targetXPosition = -25 * (amntCardsToShow - 4);

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

const CardsContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 40rem;
  max-width: 40rem;
  max-height: 8rem;
  border: 1px solid teal; 
`;

export default CardsGallary;