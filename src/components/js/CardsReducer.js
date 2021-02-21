import React, { useEffect, useReducer, useState } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

const CardsReducer = () => {
  // let cardsArr = cardsJSON.cards;
  const [cardsArr, setCardsArr] = useState(cardsJSON.cards);
  const [allowHotKeys, setAllowHotKeys] = useState(true);

  // Returns an array of containers with updated values. The containers each display the properties of a card.
  const moveContainers = (containers, direction) => {
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
        flipped: false,                // Makes sure cards are unflipped when moving.
      });
    }
    return updatedContainers;
  }

  const flipContainer = (containers) => {
    let updatedContainers = [...containers];
    let centerConIndex = updatedContainers.findIndex(x => x.xPosition === 50);
    if (centerConIndex === -1) throw "Unable to find index of the center container/card";

    updatedContainers[centerConIndex].flipped = !updatedContainers[centerConIndex].flipped;
    return updatedContainers;
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle-hot-keys":
        setAllowHotKeys(action.args);
        return state;
      case "flip":
        return flipContainer(state);
      case "cycle-left":
        return moveContainers(state, "left");
      case "cycle-right":
        return moveContainers(state, "right");
      default:
        return state;
    }
  }

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
    if (!allowHotKeys) return;

    switch (event.key) {
      case "ArrowLeft": dispatch({ type: "cycle-left" }); break;
      case "ArrowRight": dispatch({ type: "cycle-right" }); break;
      case " ": dispatch({ type: "flip" }); break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [allowHotKeys]);

  useEffect(async () => {
    //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const response = await fetch("http://localhost:8080/");
    // const data = await response.json();
    // console.log(data);
    // console.log(data[0].backText)

    // const newCardsArr = [];
    // newCardsArr.push({ backgroundColor: "#", frontText: " ", backText: "", timesAccepted: 0 });   // make sure first card is empty.
    // for (let d of data) {
    //   console.log("loop");
    //   newCardsArr.push(d);
    // }

    // setCardsArr(newCardsArr);
  }, [])

  // If cardIndex is out of bounds, default it to index 0 which will hide the card from appearing on the page.
  const getCardAtIndex = (index) => {
    if (index > 0 && index < cardsArr.length)
      return cardsArr[index];
    return cardsArr[0];
  }

  return (
    <>
      <div className="flex">
        {containers.map((c, keyInd) => {
          return <CardReducer
            key={keyInd}
            card={getCardAtIndex(c.cardIndex)}
            cardIndex={c.cardIndex}
            xPosition={c.xPosition}
            transition={c.transition}
            flipped={c.flipped}
            dispatch={dispatch}
          />
        })}
      </div>
    </>
  );
};

export default CardsReducer;