import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import "../css/Card.css";

export default function Card(props) {

  const [cycleIndex, setCycleIndex] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(props.direction);
  const [transition, setTransition] = useState("");
  const [index, setIndex] = useState(props.index);
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
  const [frontText, setFrontText] = useState(props.frontText);
  const [backText, setBackText] = useState(props.backText);
  const [display, setDisplay] = useState(() => (index > 0 && index < props.amountOfData) ? "" : "none");

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flipped, direction, index, cycleIndex]);


  // Left/right to move card. Space key to flip.
  const handleKeyDown = (event) => {
    if (event.key === " ") {            // space key
      if (direction === 50) {           // Only center card should flip. We know it is the center card if its position is at 50.
        setFlipped(!flipped);
      }
    }
    else if (event.key === "ArrowLeft") {
      if (cycleIndex <= props.amountOfData - 2) {
        setCycleIndex(prevCycleIndex => prevCycleIndex + 1);
        handleMoveCard("left");
      }
    }
    else if (event.key === "ArrowRight") {
      if (cycleIndex - 1 >= 1) {
        setCycleIndex(prevCycleIndex => prevCycleIndex - 1);
        handleMoveCard("right");
      }
    };
  }

  // Object pooling: There are only 7 cards at a given time.
  // Arrow keys move the card. When the card is off screen, it repositions to the opposing side of the screen and receives new properties to display its new card information.
  const handleMoveCard = (newDirection) => {
    const cardsCount = 7;
    const amountToMove = 50;
    const leftMostPosition = -150;
    const rightMostPosition = 150;
    const transition = "0.39s ease";

    setFlipped(false);

    if (newDirection === "left") {
      // If card is at edge of window, quickly moves it to opposite side. Updates with new card properties.
      if (direction <= leftMostPosition) {
        setDirection(rightMostPosition);
        setTransition("");
        getNewCardProperties(index + cardsCount);
        // If card is  not at edge of window, move it. Make sure it has a smooth transition property.
      } else {
        setDirection(direction - amountToMove);
        setTransition(transition);
      }
    }
    // Same as above but in the opposite direction.
    else if (newDirection === "right") {
      if (direction >= rightMostPosition) {
        setDirection(leftMostPosition);
        setTransition("");
        getNewCardProperties(index - cardsCount);
      } else {
        setDirection(direction + amountToMove);
        setTransition(transition);
      }
    }
  }

  // Get new properties to display.
  const getNewCardProperties = (newIndex) => {
    const [newProperties, indexInRange] = props.getNewData(newIndex);
    setBackgroundColor(newProperties.backgroundColor);
    setFrontText(newProperties.frontText);
    setBackText(newProperties.backText);
    if (indexInRange === false) {
      setDisplay("none");
    } else {
      setDisplay("");
    }
    // Set index even if it is out of range, so that when card moves to opposing side of screen, calculations work. Even for negative numbers.
    setIndex(newIndex);
  };

  const getBackFontSize = (charCount) => {
    if (charCount < 22) {
      return "28px;"
    } else if (charCount < 320) {
      return "24px;"
    } else if (charCount < 520) {
      return "18px"
    } else {
      console.log(`card ${index} has a character length of ${charCount}. Its text may not fit on the card.`);
      return "10px";
    }
  }

  return (
    <FlipCardContainer display={display} direction={direction} transition={transition}>
      <FlipCard flipped={flipped} onClick={() => setFlipped(!flipped)}>
        <Front backgroundColor={backgroundColor}>
          <FontContainer>
            <p>{frontText}</p>
          </FontContainer>
        </Front>
        <Back fontSize={getBackFontSize(backText.length)}>
          <FontContainer>
            {/* Temp for debugging */}
            {/* <p style={{ fontSize: "10px", margin: "0" }}>{backText.length}</p> */}
            <p>{backText}</p>
          </FontContainer>
        </Back>
      </FlipCard>
    </FlipCardContainer>
  );
};

// left moves card into position, pushing it away from the left side of the screen.
// transform -50% offsets half of card's width so it centers around its own axis.
const FlipCardContainer = styled.div`
    display: ${props => props.display};
    width: 450px;
    height: 320px;
    background: none;
    margin: 0;
    margin-top: 2rem;
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

const FontContainer = styled.div`
  padding: 1rem;
`;