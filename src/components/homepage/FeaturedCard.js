import React, { useState } from 'react';
import styled from "styled-components";

const FeaturedCard = () => {
  const [revealedAnswer, setRevealedAnswer] = useState(false);



  return (
    <Container>
      <Header>
        Featured Card!
      </Header>
      <Card>What are the 4 access modifiers and their access specifiers</Card>

      {!revealedAnswer
        ? <Button onClick={() => setRevealedAnswer(true)}>Reveal Answer</Button>

        : "Did you guess correctly?"
      }
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

const Card = styled.div`
  background-color: aqua;
  padding: 1rem;
  border-radius: 10px;
  width: 20rem;
  height: 10rem;
`;

const Button = styled.button`
  
`;


export default FeaturedCard;