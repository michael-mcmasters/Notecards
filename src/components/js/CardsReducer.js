import React, { useEffect, useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

// Returns an array of objects that will hold the card properties.
const getContainerObjects = (state, direction) => {
  const numOfContainers = 7;
  const xPositionIncrementAmnt = (direction === "left") ? -50 : 50;

  let cardContainers = [];
  for (let i = 0; i < numOfContainers; i++) {
    let newCardIndex = state[i].cardIndex;
    let newXPosition = state[i].xPosition + xPositionIncrementAmnt;
    let transition = "0.39s ease";
    if (newXPosition < -150) {
      newCardIndex += numOfContainers;
      newXPosition = 150;
      transition = "";
    } else if (newXPosition > 150) {
      newCardIndex -= numOfContainers;
      newXPosition = -150;
      transition = "";
    }

    cardContainers.push({
      cardIndex: newCardIndex,       // The card properties this container will show.
      xPosition: newXPosition,       // The value of the CSS property, left. Which works with position absolute.
      transition: transition,
      flipped: false,
    });
  }
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
            transition={c.transition}
            flipped={c.flipped}
          />
        })}
      </div>
    </>
  );
};

export default CardsReducer;