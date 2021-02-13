import React, { useEffect, useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

// Returns an array of objects that will hold the card properties.
const getContainerObjects = (state, incrementAmount) => {
  let cardContainers = [];
  let xPosition = -150;
  for (let i = 0; i < 7; i++) {
    cardContainers.push({
      cardIndex: state[i].cardIndex + incrementAmount,    // The card properties this container will show.
      xPosition: xPosition,                               // Each card is this many units away from the previous card.
      flipped: false,
    });
    xPosition += 50;
  }
  return cardContainers;
}

function reducer(state, action) {
  switch (action.type) {
    case "cycle-left":
      return getContainerObjects(state, 1);
    case "cycle-right":
      return getContainerObjects(state, -1);
    default:
      return state;
  }
}

const CardsReducer = () => {
  const cards = cardsJSON.cards;

  let [cardContainers, dispatch] = useReducer(reducer, [
    {
      cardIndex: -3,
      xPosition: 150,
      flipped: false,
    },
    {
      cardIndex: -2,
      xPosition: 100,
      flipped: false,
    },
    {
      cardIndex: -1,
      xPosition: 50,
      flipped: false,
    },
    {
      cardIndex: 0,
      xPosition: 0,
      flipped: false,
    },
    {
      cardIndex: 1,
      xPosition: 50,
      flipped: false,
    },
    {
      cardIndex: 2,
      xPosition: 100,
      flipped: false,
    },
    {
      cardIndex: 3,
      xPosition: 150,
      flipped: false,
    },
  ]);

  // Left/right to move card. Space key to flip.
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft": dispatch({ type: "cycle-left" }); break;
      case "ArrowRight": dispatch({ type: "cycle-right" }); break;
      case " ": console.log("space"); break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // If cardIndex is out of bounds, default it to index 0 which will hide the card from appearing on the page.
  const getCard = (cardIndex) => {
    if (cardIndex > 0 && cardIndex < cards.length)
      return cards[cardIndex];
    return cards[0];
  }

  return (
    <>
      <div className="flex">
        {cardContainers.map(c => {
          return <CardReducer
            card={getCard(c.cardIndex)}
            cardIndex={c.cardIndex}
            xPosition={c.xPosition}
            flipped={c.flipped}
          />
        })}
      </div>
    </>
  );
};

export default CardsReducer;