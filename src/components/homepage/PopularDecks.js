import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import CardGallary from "./CardGallary.js";

const PopularDecks = () => {
  const [cards, setCards] = useState(cardsJSON.cards);
  
  // ToDo: Import decks from an API.
  let deckOne = {
    name: "Java",
    cards: cards.slice(0, 4)
  }
  let deckTwo = {
    name: "Spanish",
    cards: cards.slice(4, 10)
  }
  let deckThree = {
    name: "State Capitals",
    cards: cards.slice(10, 20)
  }
  
  const decks = [ deckOne, deckTwo, deckThree ];
  
  return (
    <div>
      <Wrapper>
        Popular Decks
        {decks.map((deck, index) => (
          <Container key={index}>
            {deck.name}
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

const Container = styled.div`
  margin: 4rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid green;
`;

const Deck = styled.div`
  border: 1px solid red;
  display: flex;
`;

export default PopularDecks;