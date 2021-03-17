import React, { useState } from 'react';
import styled from "styled-components";
import cardsJSON from "../../resources/card-data.json";
import Card from "./Card.js";

const FeaturedCard = () => {
  const [cards, setCards] = useState(cardsJSON.cards);
  const [featuredCard, setFeaturedCard] = useState(cards[0]);
  const [flipped, setFlipped] = useState(false);

  const handleFlipCard = () => {
    setFlipped(flipped => !flipped);
  }

  const handleGetNewCard = () => {
    setFlipped(false);

    const filteredCards = cards.filter(c => {
      if (c !== featuredCard && c.frontText.length < 150 && c.backText.length < 150)
        return true;
      return false;
    })
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setTimeout(() => {
      setFeaturedCard(filteredCards[randomIndex]);
    }, 270);  // use timeout so that card text changes between flip animation (so that user doesn't see it change).
  }

  return (
    <Container>
      <Header>
        Featured Card
      </Header>
      <Card card={featuredCard} flipped={flipped} />

      <Footer>
        <Button onClick={handleFlipCard}>Flip card</Button>
        <Button onClick={handleGetNewCard}>See another card</Button>
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

const Footer = styled.div`
  margin-top: 5rem;
`;

const Button = styled.button`
  
`;


export default FeaturedCard;