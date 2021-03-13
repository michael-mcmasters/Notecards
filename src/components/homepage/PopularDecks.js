import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import CardGallary from "./CardGallary.js";

const PopularDecks = () => {
  const [cards, setCards] = useState(cardsJSON.cards);
  
  // ToDo: Import decks from an API.
  let deckOne = {
    name: "Java",
    cards: cards.slice(0, 7)
  }
  let deckTwo = {
    name: "Spanish",
    cards: cards.slice(15, 23)
  }
  let deckThree = {
    name: "State Capitals",
    cards: cards.slice(30, 37)
  }
  
  const decks = [ deckOne, deckTwo, deckThree ];
  
  return (
    <div>
      <Wrapper>
        Popular Decks
        {decks.map((deck, index) => (
          <Container key={index}>
            <DeckTitle>
              {deck.name}
            </DeckTitle>
            <Deck>
              <CardGallary deck={deck} />
            </Deck>
          </Container>
        ))}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;
`;

const DeckTitle = styled.p`
  width: fit-content;
  margin: 0;
  margin-left: 1rem;
  margin-bottom: 1rem;
  height: 0rem;
`;

const Container = styled.div`
  margin: 4rem;
  margin-top: 0;
  border: 1px solid green;
`;

const Deck = styled.div`
  display: flex;
`;

export default PopularDecks;