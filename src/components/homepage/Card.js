import React from 'react';
import styled, { css } from "styled-components";

const Card = ({ card, flipped }) => {
  return (
    <Container>
      <FlipCard flipped={flipped}>
        <Front backgroundColor={card.backgroundColor} scrollbarColor="white">
          {card.frontText}
        </Front>
        <Back scrollbarColor={card.backgroundColor}>
          {card.backText}
        </Back>
      </FlipCard>
    </Container>
  );
};

const Container = styled.div`
  width: 22rem;
  height: 13rem;
  background: none;
  margin: 0;
  margin-top: 2rem;
  cursor: pointer;
  transition: ${props => props.transition};

  animation-duration: 0.4s;
`;

const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const ScrollBar = css`
    textarea::-webkit-scrollbar {
    color: transparent;
    background-color: transparent;
    width: 10px;      // Width of verticle scrollbar
    height: 0px;      // 0px hides the horizontal scrollbar
  }

  textarea::-webkit-scrollbar-thumb:vertical{
    background: ${props => props.scrollbarColor};
    border-radius: 10px;
  } 
  
  textarea::-webkit-scrollbar-thumb::horizontal{
    height: 0px;
  }
  
  textarea::-webkit-scrollbar-corner {
    display: none;
  }
`;

const Front = styled.div`
  font-size: 28px;

  padding: 1rem 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;

  background-color: ${props => props.backgroundColor}; 
  
  ${ScrollBar}
`;

const Back = styled.div`
  padding: 1rem 0;
  font-size: 28px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
  
  ${ScrollBar}
`;

export default Card;