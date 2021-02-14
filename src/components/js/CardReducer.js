import React from 'react';
import styled, { keyframes } from "styled-components";

const CardReducer = ({ card, cardIndex, xPosition, transition, flipped }) => {
  return (
    <FlipCardContainer xPosition={xPosition} transition={transition}>
      <FlipCard flipped={flipped}>
        <Front backgroundColor={card.backgroundColor}>
          <TextContainer>
            {card.frontText}
          </TextContainer>
        </Front>
        <Back>
          <TextContainer>
            {card.backText}
          </TextContainer>
        </Back>
      </FlipCard>
    </FlipCardContainer>
  );
};

const cardBumpUpAnimation = keyframes`
   50% { margin-top: 1rem; }
`;

const FlipCardContainer = styled.div`
  /* position: absolute;
  width: 300px;
  border: 1px solid gray;
  transition: ${props => props.transition};
  left: ${props => props.xPosition}%;
  transform: translateX(-50%);
  -webkit-transform:translateX(-50%); */
  
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
    
animation-name: ${props => props.cardAcceped ? cardBumpUpAnimation : ""};
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

const TextContainer = styled.div`
  padding: 1rem;
`;

// Have to set height manually because textarea's don't have an auto height property, and they don't fill parent div's height.
const Input = styled.textarea`
  height: 240px;
  width: 100%;
  background-color: transparent;
  border: none;
  resize: none;
`;

const CancelButton = styled.button`
  position: relative;
  border: none;
  width: 4em;
  height: 4em;
  margin-bottom: 3em;
  margin-right: 1em;
  border-radius: 100px;
  background-color: ${props => props.pressed ? "green" : "red"};
  
  bottom: ${props => props.userEditingText ? "-5em" : "1em"};
  transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${props => props.userEditingText ? "0.2s" : "0"};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

const SaveButton = styled.button`
  position: relative;
  border: none;
  width: 4em;
  height: 4em;
  margin-bottom: 3em;
  border-radius: 100px;
  background-color: ${props => props.pressed ? "green" : "red"};
  
  bottom: ${props => props.userEditingText ? "-5em" : "1em"};
  transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${props => props.userEditingText ? "0.5s" : "0"};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;


export default CardReducer;