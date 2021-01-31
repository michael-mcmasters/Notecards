import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import "../css/Card.css";

export default function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  const [transition, setTransition] = useState("");

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

  useEffect(() => {
    setDirection(props.direction);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flipped, direction]);      // Re-renders component whenever flipped value changes.

  const handleMoveCard = (newDirection) => {
    if (newDirection === "left") {
      if (direction <= -110) {
        setDirection(110);
        setTransition("");
      } else {
        setDirection(direction - 55);
        setTransition("all 0.8s ease");
      }
    }
    else if (newDirection === "right") {
      if (direction >= 110) {
        setDirection(-110);
        setTransition("");
      } else {
        setDirection(direction + 55);
        setTransition("all 0.8s ease");
      }
    }

    // // If left, move right
    // if (direction === "-55vw") {
    //   if (newDirection === "right") {
    //     setDirection("0vw");
    //   }
    // }
    // // If center, move left or right
    // else if (direction === "0vw") {
    //   if (newDirection === "left") {
    //     setDirection("-55vw");
    //   }
    //   else if (newDirection === "right") {
    //     setDirection("55vw");
    //   }
    // }
    // // If right, move left
    // else if (direction === "55vw") {
    //   if (newDirection === "left") {
    //     setDirection("0vw");
    //   }
    // }
  }

  return (
    // <div>
    //   <div className="flip-card-container">
    //     <div className="flip-card" onClick={() => handleCardFlip()}>
    //       <div className="front" style={{ background: props.backgroundColor }}>
    //         <h1>{props.frontText}</h1>
    //         <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
    //       </div>
    //       <div className="back">
    //         <p>{props.backText}</p>
    //         <button>Submit</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <FlipCardContainer direction={direction} transition={transition}>
      <FlipCard flipped={flipped} onClick={() => setFlipped(!flipped)}>
        <Front backgroundColor={props.backgroundColor}>
          <h1>{props.frontText}</h1>
          <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
        </Front>
        <Back>
          <p>{props.backText}</p>
          <button>Submit</button>
        </Back>
      </FlipCard>
    </FlipCardContainer>
  );
};

const FlipCardContainer = styled.div`
    width: 250px;
    height: 320px;
    background: none;
    margin: 0;
    cursor: pointer;
    position: absolute;
    transition: ${props => props.transition};
    left: ${props => `${props.direction - 15}vw`};
`;
// transition: left 0.8s;

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