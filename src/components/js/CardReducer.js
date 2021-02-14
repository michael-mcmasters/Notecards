import React from 'react';
import styled, { keyframes } from "styled-components";

const CardReducer = ({ card, cardIndex, xPosition, transition, flipped }) => {
  return (
    <Cardy xPosition={xPosition} transition={transition}>
      <p>{xPosition}</p>
      <p>{cardIndex}</p>
      <p>{card.backText}</p>
    </Cardy>
  );
};

const Cardy = styled.div`
  position: absolute;
  width: 300px;
  border: 1px solid gray;
  transition: ${props => props.transition};
  left: ${props => props.xPosition}%;
  transform: translateX(-50%);
  -webkit-transform:translateX(-50%);
`;

export default CardReducer;