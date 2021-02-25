import React from 'react';
import styled, { keyframes } from "styled-components";
import CardContent from "./CardContent";

const CardReducer = ({ card, cardIndex, xPosition, transition, flipped, animation, dispatch }) => {
  return (
    <Container xPosition={xPosition} transition={transition} animation={animation}>
      <FlipCard flipped={flipped}>
        <Front backgroundColor={card.backgroundColor}>
          {cardIndex}
          <CardContent text={card.frontText} cardIndex={cardIndex} side={"front"} dispatch={dispatch} />
        </Front>
        <Back>
          {cardIndex}
          <CardContent text={card.backText} cardIndex={cardIndex} side={"back"} dispatch={dispatch} />
        </Back>
      </FlipCard>
    </Container>
  );
};

const CardBumpUpAnimation = keyframes`
  50% { margin-top: 1rem; }
`;

const CardBumpDownAnimation = keyframes`
  50% { margin-top: 3rem; }
`;

const Container = styled.div`
  display: ${props => props.display};
  width: 450px;
  height: 320px;
  background: none;
  margin: 0;
  margin-top: 2rem;
  cursor: pointer;
  position: absolute;
  transition: ${props => props.transition};

  left: ${props => props.xPosition}%;
  transform: translateX(-50%);
  -webkit-transform:translateX(-50%);
  
  animation-name: ${props => props.animation === "CardBumpUpAnimation"  // prettier extension messing up formatting
    ? CardBumpUpAnimation
    : props.animation === "CardBumpDownAnimation" ? CardBumpDownAnimation
      : ""};
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

const Front = styled.div`
  font-size: 28px;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;

  background-color: ${props => props.backgroundColor};  
`;

const Back = styled.div`
  font-size: ${props => props.fontSize};
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
`;

export default CardReducer;