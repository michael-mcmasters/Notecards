import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";

const HomePage2 = () => {
  const [cards, setCards] = useState(cardsJSON.cards);

  // ToDo: Import decks from an API.
  let deckOne = {
    name: "Java",
    cards: cards.slice(0, 7)
  }
  let deckTwo = {
    name: "Spanish",
    cards: cards.slice(15, 21)
  }
  let deckThree = {
    name: "State Capitals",
    cards: cards.slice(30, 37)
  }

  const decks = [deckOne, deckTwo, deckThree];

  return (
    <Wrapper>
      <DeckRow>
        {decks[0].name}
        <CardsGallary>
          <Card>This is a really long sentence. We want to see what happens when we have really long sentences.</Card>
          <Card>{decks[0].cards[6].frontText}</Card>
          <Card>{decks[0].cards[5].frontText}</Card>
          <Card>{decks[0].cards[5].frontText}</Card>
        </CardsGallary>
      </DeckRow>
      <DeckRow>
        Spanish
      </DeckRow>
      <DeckRow>
        Spanish
      </DeckRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5rem;
  border: 1px solid yellow;
`;

const DeckRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  margin: 5rem 0;
  border: 1px solid red;
  overflow: hidden;
`;

const CardsGallary = styled.div`
  position: relative;
  left: 10%;              /* Div is pushed to the right so that only part of last card is shown. */
  margin-left: -2rem;     /* Offset its margin */
  border: 1px solid teal;
  overflow: hidden;
  display: flex;
`;

const Card = styled.p`
  margin: 1rem;
  width: 8rem;
  height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
`;

export default HomePage2;