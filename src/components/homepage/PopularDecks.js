import React, { useState, useContext, useEffect } from 'react';
import styled from "styled-components";
import { ColorThemeContext } from "../custom_hooks/ColorThemeContext";
import cardsJSON from "../../resources/card-data.json";
import CardsGallary from "./CardsGallary";
import TinyCard from "./TinyCard";

const HomePage2 = () => {
  const theme = useContext(ColorThemeContext);

  // ToDo: Import decks from an API.
  const [decks, setDecks] = useState([
    {
      name: "Core Java",
      cards: cardsJSON.cards.slice(0, 10)
    },
    {
      name: "Spanish",
      cards: cardsJSON.cards.slice(15, 35)
    },
    {
      name: "State Capitals",
      cards: cardsJSON.cards.slice(35, 50)
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
      handleFlipRandomCard();
    }, [2000])

    return () => clearInterval(interval);

  }, [])

  const amntCardsToShow = 100;
  return (
    <Wrapper>

      <Header>
        Popular Decks
      </Header>

      <DeckRow>
        <DeckName theme={theme}>
          {decks[0].name}
        </DeckName>
        <CardsGallary deck={decks[0]} amntCardsToShow={amntCardsToShow} />
      </DeckRow>

      <DeckRow>
        <DeckName theme={theme}>
          {decks[1].name}
        </DeckName>
        <CardsGallary deck={decks[1]} amntCardsToShow={amntCardsToShow} />
      </DeckRow>

      <DeckRow>
        <DeckName theme={theme}>
          {decks[2].name}
        </DeckName>
        <CardsGallary deck={decks[2]} amntCardsToShow={amntCardsToShow} />
      </DeckRow>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 60rem;
  background-color: rgba(1, 1, 1, 0.15);
  border-radius: 10px;
  
  @media(max-width: 800px) {
    padding: 1rem 2rem;
  }
`;

const Header = styled.h1`
  color: white;
`;

const DeckRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  transition: background-color 0.2s;
  cursor: pointer;
  
  &:hover {
    background-color: #287271;
  }
  
  @media(max-width: 800px) {
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
    margin: 0;
    padding: 0;
  }
`;

const DeckName = styled.div`
  z-index: 1;
  margin: 1rem;
  padding: 0 0.8rem;
  width: 7rem;
  height: 5rem;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  background-color: ${props => props.theme.btnBG};
  border-right: 2px solid black;
  border-radius: 10px;
`;

export default HomePage2;