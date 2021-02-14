import React, { useEffect, useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

// Returns an array of objects that will hold the card properties.
const getContainerObjects = (state, direction) => {
  const indexIncrement = (direction === "left") ? 1 : -1;
  const xPositionIncrement = (direction === "left") ? -50 : 50;

  let cardContainers = [];
  for (let i = 0; i < 7; i++) {
    let newXPosition = state[i].xPosition + xPositionIncrement;
    if (newXPosition < -150) {
      newXPosition = 150;
    } else if (newXPosition > 150) {
      newXPosition = -150;
    } else {
      console.log(state[i].xPosition + " + " + xPositionIncrement + " is " + newXPosition)
    }
    cardContainers.push({
      cardIndex: state[i].cardIndex + indexIncrement,    // The card properties this container will show.
      xPosition: newXPosition,       // The value of the CSS property, left. Which works with position absolute.
      flipped: false,
    });
  }
  console.log(" ");
  return cardContainers;
}

function reducer(state, action) {
  switch (action.type) {
    case "cycle-left":
      return getContainerObjects(state, "left");
    case "cycle-right":
      return getContainerObjects(state, "right");
    default:
      return state;
  }
}

const CardsReducer = () => {
  const cards = cardsJSON.cards;

  let [cardContainers, dispatch] = useReducer(reducer, [
    {
      cardIndex: -3,
      xPosition: -150,
      flipped: false,
    },
    {
      cardIndex: -2,
      xPosition: -100,
      flipped: false,
    },
    {
      cardIndex: -1,
      xPosition: -50,
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