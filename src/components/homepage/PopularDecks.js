import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import CardGallary from "./CardGallary.js";

const PopularDecks = () => {
  const [decks, setDecks] = useState(cardsJSON.cards);
  
  console.log(decks);
  
  return (
    <div>
      <Wrapper>
        Popular Decks
        <Container>
          Java: <CardGallary />
        </Container>
        <Container>
          Spanish: <CardGallary />
        </Container>
        <Container>
          State Capitals: <CardGallary />
        </Container>
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