import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import CardsGallary from "./CardsGallary";
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
    const randomDeckIndx = Math.floor(Math.random() * decks.length);
    const randomCardIndx = Math.floor(Math.random() * decks[randomDeckIndx].cards.length);

    // Animation may look cooler if a second timer unflipped cards separately from this one.
    const decksCopy = [...decks];
    for (let i = 0; i < decksCopy.length; i++) {
      for (let j = 0; j < decksCopy[i].cards.length; j++) {
        decksCopy[i].cards[j].flipped = false;
      }
    }
    decksCopy[randomDeckIndx].cards[randomCardIndx].flipped = true;
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
        <CardsGallary deck={decks[0]} />
      </DeckRow>

      {/* <DeckRow>
        <DeckName>
          {decks[0].name}
        </DeckName>
        <CardsGallary>
          {decks[0].cards.map((card, i) => {
            if (i > 3) return;
            return <TinyCard key={i} card={card} xPosition={i + 0.1} flipped={card.flipped} />
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
            return <TinyCard key={i} card={card} xPosition={i} flipped={card.flipped} />
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
      </DeckRow> */}

    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin: auto; */
  max-width: 60rem;
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
  border: 1px solid red;
`;

const DeckName = styled.div`
  margin: 1rem;
  padding: 2rem;
  width: 5rem;
  border: 1px solid red;
`;

// const CardsGallary = styled.div`
//   /* These 3 props used to cut off end of card. Can remove them. */
//   /* position: relative;
//   left: 10%;              
//   margin-left: -4rem;   */


//   overflow: hidden;
//   /* display: flex; */
//   border: 1px solid teal;  
// `;

const Card = styled.p`
  margin: 1rem;
  width: 8rem;
  height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
`;

export default HomePage2;