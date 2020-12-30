import React, { useEffect, useState } from "react";
import "../css/Card.css";

export default function Card(props) {
  const [flipped, setFlipped] = useState(false);

  const getFlipDirection = () => {
    if (flipped === true) {
      return { transform: "rotateY(180deg)" };
    } else {
      return { transform: "rotateY(0deg)" };
    }
  }

  const handleKeyDown = (event) => {
    console.log('A key was pressed', event.keyCode);
  };

  useEffect(() => {   // Only runs when component mounts because we pass zero dependencies []
    window.addEventListener('keydown', handleKeyDown);

    return () => {    // This arrow function is called when the component dismounts.
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="flip-card" onClick={() => setFlipped(!flipped)} style={getFlipDirection()}>
        <div className="flip-card-inner" style={{ backgroundColor: props.backgroundColor }}>
          <div className="flip-card-front" style={{ backgroundColor: props.backgroundColor }}>
            <h1>{props.text}</h1>
          </div>
          <div className="flip-card-back" style={{ backgroundColor: props.backgroundColor }}>
            <h1>John Doe</h1>
            <p>Architect and Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};