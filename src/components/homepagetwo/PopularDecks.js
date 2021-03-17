import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import TinyCard from "./TinyCard";

const HomePage2 = () => {
  // ToDo: Import decks from an API.
  const [decks, setDecks] = useState([
    {
      name: "Core Java",
      cards: cardsJSON.cards.slice(0, 7)
    },
    {
      name: "Spanish",
      cards: cardsJSON.cards.slice(15, 30)
    },
    {
      name: "State Capitals",
      cards: cardsJSON.cards.slice(30, 37)
    }
  ])

  const handleFlipRandomCard = () => {
    const randomDeckInd = Math.floor(Math.random() * decks.length);
    const randomCardInd = Math.floor(Math.random() * decks[randomDeckInd].cards.length);

    const decksCopy = [...decks];
    decksCopy[randomDeckInd].cards[randomCardInd].flipped = !decksCopy[randomDeckInd].cards[randomCardInd].flipped;

    for (let i = 0; i < decksCopy.length; i++) {
      for (let j = 0; j < decksCopy[i].cards.length; j++) {
        if (i === randomDeckInd && j === randomCardInd)
          decksCopy[i].cards[j].flipped = true;
        else
          decksCopy[i].cards[j].flipped = false;
      }
    }

    setDecks(decksCopy);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval")
      handleFlipRandomCard();
    }, [1000])

    return () => clearInterval(interval);

  }, [])

  return (
    <Wrapper>
      <Header>
        Popular Decks
      </Header>

      <DeckRow>
        <DeckName>
          {decks[0].name}
        </DeckName>
        <CardsGallary>
          {decks[0].cards.map((card, i) => {
            if (i > 3) return;
            return <TinyCard key={i} card={card} flipped={card.flipped} />
          })}
        </CardsGallary>
      </DeckRow>

      <DeckRow>
        <DeckName>
          {decks[1].name}
        </DeckName>
        <CardsGallary>
          {decks[1].cards.map((card, i) => {
            if (i > 3) return;
            return <TinyCard key={i} card={card} flipped={card.flipped} />
          })}
        </CardsGallary>
      </DeckRow>

      <DeckRow>
        <DeckName>
          {decks[2].name}
        </DeckName>
        <CardsGallary>
          {decks[2].cards.map((card, i) => {
            if (i > 3) return;
            return <TinyCard key={i} card={card} flipped={card.flipped} />
          })}
        </CardsGallary>
      </DeckRow>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin: auto; */
  max-width: 50rem;
  /* border: 1px solid yellow; */
`;

const Header = styled.h1`
  
`;

const DeckRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* background-color: gray; */
  margin-bottom: 1rem;
  overflow: hidden;
  /* border: 1px solid red; */
`;

const DeckName = styled.div`
  margin: 1rem;
  padding: 2rem;
  width: 5rem;
  border: 1px solid red;
`;

const CardsGallary = styled.div`
  position: relative;
  left: 10%;              /* Div is pushed to the right so that only part of last card is shown. */
                          /* Offset its margin */
  margin-left: -4rem;  
  overflow: hidden;
  display: flex;
  /* border: 1px solid teal;   */
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