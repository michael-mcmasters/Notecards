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
          <Card>{decks[0].cards[4].frontText}</Card>
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
  margin: 5rem 0;
  border: 1px solid red;
`;

const CardsGallary = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 30rem;
  border: 1px solid teal;
`;

// const Card = styled.p`
//   background-color: skyblue;
//   margin: 0.5rem;
//   /* white-space: nowrap; */
//   /* overflow: hidden; */
//   text-overflow: ellipsis;
//   max-height: 3rem;
// `;

const Card = styled.p`
  /* white-space: nowrap; */
  margin: 1rem;
  width: 7rem;
  height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
`;



export default HomePage2;