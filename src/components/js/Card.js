import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import "../css/Card.css";

export default function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState("left");

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleMovingCard("left")
    } else if (event.key === "ArrowLeft") {
      handleMovingCard("right");
    } else if (event.key === " ") { // space key
      setFlipped(!flipped);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {    // This arrow function is called when the component dismounts.
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flipped]); // Re-renders component whenever flipped value changes.

  const handleMovingCard = (direction) => {
    setDirection((direction === "left") ? "right" : "left");
  }

  return (
    // <div>
    //   <div className="card-container">
    //     <div className="card" onClick={() => handleCardFlip()}>
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

    <div>
      <CardContainer direction={direction}>
        <Cardd flipped={flipped} onClick={() => setFlipped(!flipped)}>
          <Front backgroundColor={props.backgroundColor}>
            <h1>{props.frontText}</h1>
            <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
          </Front>
          <Back>
            <p>{props.backText}</p>
            <button>Submit</button>
          </Back>
        </Cardd>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
    width: 250px;
    height: 320px;
    background: none;
    margin: 2rem;
    cursor: pointer;
    position: relative;
    transition: left 0.8s;
    left: ${props => (props.direction === "left") ? "-55vw" : "55vw"};
  `;

const Cardd = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  `;

const Front = styled.div`
    top: 0;
    left: 0;
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