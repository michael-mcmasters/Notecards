import React from 'react';

const CardReducer = ({ card, cardIndex, xPosition, flipped }) => {
  return (
    <div style={{ width: "300px", border: "1px solid gray" }}>
      <p>{xPosition}</p>
      <p>{cardIndex}</p>
      <p>{card.backText}</p>
    </div>
  );
};

export default CardReducer;