import React, { useState } from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import Card from "./Card.js";

const FeaturedCard = () => {
  const [cards, setCards] = useState(cardsJSON.cards);
  const [revealedAnswer, setRevealedAnswer] = useState(false);

  const handleRevealAnswer = () => {
    setRevealedAnswer(!revealedAnswer);
  }

  const handleGetNewCard = () => {

  }

  return (
    <Container>
      <Header>
        Featured Card!
      </Header>
      {/* <Card flipped={revealedAnswer}>What are the 4 access modifiers and their access specifiers</Card> */}
      <Card card={cards[0]} flipped={revealedAnswer} />

      <Footer>
        <Button onClick={handleRevealAnswer}>Reveal Answer</Button>
        <Button onClick={handleGetNewCard}>See another card</Button>
        {/* {!revealedAnswer
          ? (
            <>
              <Button onClick={handleRevealAnswer}>Reveal Answer</Button>
              <Button onClick={handleGetNewCard}>See another card</Button>
            </>
          )

          : "Did you guess correctly?"
        } */}
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  padding-top: 0;
  /* border: 1px solid red; */
`;

const Header = styled.h1`
  
`;

// const Card = styled.div`
//   /* background-color: aqua; */
//   padding: 1rem;
//   border-radius: 10px;
//   width: 20rem;
//   height: 10rem;
//   background-color: ${props => props.flipped ? "green" : "aqua"};
// `;

const Footer = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  
`;


export default FeaturedCard;