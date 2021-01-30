import React, { useEffect, useState } from "react";
import "../css/Card.css";

export default function Card(props) {
  const [flipped, setFlipped] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      moveCard("left")
    } else if (event.key === "ArrowLeft") {
      moveCard("right");
    } else if (event.key === " ") { // space key
      handleCardFlip();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {    // This arrow function is called when the component dismounts.
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flipped]); // Re-renders component whenever flipped value changes.

  // transform-style: preserve-3d was not working by assigning with React no matter what I tried. So here I am directly manipulating the CSS file.
  // This makes the cards look more 3D as they flip.
  const handleCardFlip = () => {
    const elements = document.querySelectorAll(".card");
    elements[props.index].style.transform = flipped ? "rotateY(0deg)" : "rotateY(180deg)";
    setFlipped(!flipped);
  }

  const moveCard = (direction) => {
    const elements = document.querySelectorAll(".card-container");
    elements[props.index].style.left = (direction === "left") ? "55vw" : "-55vw";
  }

  return (
    <div >
      <div class="card-container">
        <div class="card" onClick={() => handleCardFlip()}>
          <div class="front" style={{ background: props.backgroundColor }}>
            <h1>{props.frontText}</h1>
            <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>
          <div class="back">
            <p>{props.backText}</p>
            <button>Submit</button></div>
        </div>
      </div>
    </div>
  );
};