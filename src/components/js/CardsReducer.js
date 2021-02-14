import React, { useEffect, useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

// Returns an array of containers with updated values. The containers each display the properties of a card.
const updateContainers = (containers, direction) => {
  const numOfContainers = containers.length;
  const xPositionIncrementAmnt = (direction === "left") ? -50 : 50;

  let updatedContainers = [];
  for (let i = 0; i < numOfContainers; i++) {
    let newCardIndex = containers[i].cardIndex;
    let newXPosition = containers[i].xPosition + xPositionIncrementAmnt;
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

    updatedContainers.push({
      cardIndex: newCardIndex,       // The card properties this container will show. If out of bounds of cards array, container will have display: none.
      xPosition: newXPosition,       // The value of the CSS property, left. Which works with position absolute.
      transition: transition,
      flipped: false,
    });
  }
  return updatedContainers;
}

function reducer(state, action) {
  switch (action.type) {
    case "cycle-left":
      return updateContainers(state, "left");
    case "cycle-right":
      return updateContainers(state, "right");
    default:
      return state;
  }
}

const CardsReducer = () => {
  const cardsArr = cardsJSON.cards;

  let [containers, dispatch] = useReducer(reducer, [
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
  const getCardAtIndex = (index) => {
    if (index > 0 && index < cardsArr.length)
      return cardsArr[index];
    return cardsArr[0];
  }

  return (
    <>
      <div className="flex">
        {containers.map(c => {
          return <CardReducer
            card={getCardAtIndex(c.cardIndex)}
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