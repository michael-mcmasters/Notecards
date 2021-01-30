import React, { useEffect, useState } from "react";
import "../css/Card.css";

export default function Card(props) {
  const [flipped, setFlipped] = useState(false);

  const handleKeyDown = (event) => {
    console.log('A key was pressed', event.keyCode);
  };

  useEffect(() => {   // Only runs when component mounts because we pass zero dependencies []
    window.addEventListener('keydown', handleKeyDown);

    return () => {    // This arrow function is called when the component dismounts.
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // transform-style: preserve-3d was not working by assigning with React no matter what I tried. So here I am directly manipulating the CSS file.
  // This makes the cards look more 3D as they flip.
  const flipCard = () => {
    const elements = document.querySelectorAll(".card");
    elements[props.index].style.transform = flipped ? "rotateY(0deg)" : "rotateY(180deg)";
    setFlipped(!flipped);
  }

  return (
    <div >
      <div class="card-container">
        <div class="card" onClick={() => flipCard()}>
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