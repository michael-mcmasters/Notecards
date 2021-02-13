import React from 'react';

const CardReducer = ({ card, cardIndex, xPosition, flipped }) => {
  return (
    <div>
      <p>{card.backText}</p>
    </div>
  );
};

export default CardReducer;