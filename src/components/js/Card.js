import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import "../css/Card.css";

export default function Card(props) {

  //let { index, backgroundColor, frontText, backText, getNewData } = props;

  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(props.direction);
  const [transition, setTransition] = useState("");
  const [index, setIndex] = useState(props.index);
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
  const [frontText, setFrontText] = useState(props.frontText);
  const [backText, setBackText] = useState(props.backText);

  const [cardId, setCardId] = useState(props.index);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flipped, direction]);      // Re-renders component whenever flipped value changes.

  // Left/right to move card. Space key to flip.
  const handleKeyDown = (event) => {
    switch (event.key) {
      case " ":                   // space key
        setFlipped(!flipped);
        break;
      case "ArrowLeft":
        handleMoveCard("left");
        break;
      case "ArrowRight":
        handleMoveCard("right");
        break;
    }
  };

  // Object pooling: There are only 7 cards at a given time.
  // Arrow keys move the card. When the card is off screen, it repositions to the opposing side of the screen and receives its new props data to display its new card information.
  const handleMoveCard = (newDirection) => {
    if (newDirection === "left") {
      if (direction <= -150) {
        setDirection(150);
        setTransition("");                  // Move to opposing screen. Remove transition affect so user doesn't see it move.

        //  0  1  2  3  4  5  6
        // +7 +7 +7 +7 +7 +7 +7
        //  7  8  9 10 11 12 13
        const newIndex = index + 7;
        const [newData, indexInRange] = props.getNewData(newIndex);
        if (indexInRange) {
          setIndex(index + 7);
          setBackgroundColor(newData.backgroundColor);
          setFrontText(newData.frontText);
          setBackText(newData.backText);
          setCardId(newData.id);
        }
      } else {
        setDirection(direction - 50);
        setTransition("all 0.8s ease");     // Re-add transition affect.
      }
    }
    else if (newDirection === "right") {
      if (direction >= 150) {
        setDirection(-150);
        setTransition("");


        const newIndex = index - 7;
        setIndex(index - 7);
        const newData = props.getNewData(newIndex);
        setBackgroundColor(newData.backgroundColor);
        setFrontText(newData.frontText);
        setBackText(newData.backText);
        setCardId(newData.id);

      } else {
        setDirection(direction + 50);
        setTransition("all 0.8s ease");
      }
    }
  }

  return (
    <FlipCardContainer direction={direction} transition={transition}>
      <FlipCard flipped={flipped} onClick={() => setFlipped(!flipped)}>
        <Front backgroundColor={backgroundColor}>
          <h1>{index}</h1>
          <h1>{cardId}</h1>
          <h1>{frontText}</h1>
          <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
        </Front>
        <Back>
          <p>{backText}</p>
          <button>Submit</button>
        </Back>
      </FlipCard>
    </FlipCardContainer>
  );
};

// left moves card into position, pushing it away from the left side of the screen.
// transform -50% offsets half of card's width so it centers around its own axis.
const FlipCardContainer = styled.div`
    width: 250px;
    height: 320px;
    background: none;
    margin: 0;
    cursor: pointer;
    position: absolute;
    transition: ${props => props.transition};
    
    left: ${props => props.direction}%;
    transform: translateX(-50%);
    -webkit-transform:translateX(-50%);
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
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
    
    background-color: ${props => props.backgroundColor};
`;

const Back = styled.div`
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