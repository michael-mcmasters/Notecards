import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TinyCard from "./TinyCard";

const CardsGallary = ({ cards }) => {
  const [absolutePos, setAbsolutePos] = useState(0);
  const targetAbsolutePos = -200;

  useEffect(() => {
    setAbsolutePos(targetAbsolutePos);
  }, [])

  let spaceBtwnCards = 0;
  return (
    <Wrapper>
      {cards.map((c, i) => {
        spaceBtwnCards += 25;
        console.log(c);
        return <TinyCard key={i} card={c} xPosition={absolutePos + spaceBtwnCards} flipped={c.flipped} />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 40rem;
  max-width: 40rem;
  max-height: 8rem;
  border: 1px solid teal; 
`;

export default CardsGallary;