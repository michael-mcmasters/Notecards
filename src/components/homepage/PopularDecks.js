import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import CardGallary from "./CardGallary.js";

const PopularDecks = () => {
  const [cards, setCards] = useState(cardsJSON.cards);
  
  let deckOne = cards.slice(0, 4);
  let deckTwo = cards.slice(4, 10);
  let deckThree = cards.slice(10, 20);
  
  // ToDo: Import decks from an API.
  const decks = [ deckOne, deckTwo, deckThree ];
  
  return (
    <div>
      <Wrapper>
        Popular Decks
        {decks.map((deck, index) => (
          <Container key={index}>
           Spanish:
           <CardGallary deck={deck} />
          </Container>
        ))}
        
        {/* <Container>
          Java: <CardGallary />
        </Container>
        <Container>
          Spanish: <CardGallary />
        </Container>
        <Container>
          State Capitals: <CardGallary />
        </Container> */}
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
  border: 1px solid red;
  display: flex;
`;

export default PopularDecks;