import React, { useEffect, useReducer, useState } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

const CardsReducer = () => {
  // let cardsArr = cardsJSON.cards;
  const [cardsArr, setCardsArr] = useState(cardsJSON.cards);
  const [allowHotKeys, setAllowHotKeys] = useState(true);

  // The index of the container directly at the center of the screen
  const getCenterContainerIndex = (containers) => {
    const index = containers.findIndex(c => c.xPosition === 50);
    if (index === -1) throw "Unable to find index of the center card container";
    return index;
  }

  // The container directly at the center of the screen
  const getCenterContainer = (containers) => {
    const index = getCenterContainerIndex(containers);
    return containers[index];
  }

  // Returns true is another card exists in the cycle direction.
  // For example, if user wants to cycle right, this returns true if there exists another card to the right of the current center card. And false if not.
  const cardExistsInDirection = (containers, cardsArr, direction) => {
    const cardIndex = getCenterContainer(containers).cardIndex;
    const nextCardIndex = (direction === "left") ? cardIndex + 1 : cardIndex - 1;
    if (nextCardIndex <= 0 || nextCardIndex > cardsArr.length - 1)    // Pretend index 0 is out of range because it is reserved for cards showing display: none.
      return false;
    return true;
  }

  // Updates container properties to display new cards and to move them around. Returns an array of objects.
  const moveContainers = (containers, cardsArr, direction) => {
    if (!cardExistsInDirection(containers, cardsArr, direction)) return containers;

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
        animation: "",                 // Stops animation when moving.
        flipped: false,                // Makes sure cards are unflipped when moving.
      });
    }
    return updatedContainers;
  }

  const flipContainer = (containers) => {
    let updatedContainers = [...containers];
    const index = getCenterContainerIndex(updatedContainers);
    updatedContainers[index].flipped = !updatedContainers[index].flipped;
    return updatedContainers;
  }

  const addAnimation = (containers, cardCorrect) => {
    console.log("wrong")
    const updatedContainers = [...containers];
    const index = getCenterContainerIndex(updatedContainers);
    updatedContainers[index].animation = cardCorrect ? "CardBumpUpAnimation" : "CardBumpDownAnimation";
    return updatedContainers;
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "enable-hot-keys":
        setAllowHotKeys(action.payload);
        return state;
      case "flip":
        return flipContainer(state);
      case "got-card-correct":
        return addAnimation(state, true);
      case "got-card-wrong":
        return addAnimation(state, false);
      case "cycle-left":
        return moveContainers(state, cardsArr, "left");
      case "cycle-right":
        return moveContainers(state, cardsArr, "right");
      case "update-text":
        return state;
      default:
        return state;
    }
  }

  let [containers, dispatch] = useReducer(reducer, [
    {
      cardIndex: -3,
      xPosition: -150,
      animation: "",
      flipped: false,
    },
    {
      cardIndex: -2,
      xPosition: -100,
      animation: "",
      flipped: false,
    },
    {
      cardIndex: -1,
      xPosition: -50,
      animation: "",
      flipped: false,
    },
    {
      cardIndex: 0,
      xPosition: 0,
      animation: "",
      flipped: false,
    },
    {
      cardIndex: 1,
      xPosition: 50,
      animation: "",
      flipped: false,
    },
    {
      cardIndex: 2,
      xPosition: 100,
      animation: "",
      flipped: false,
    },
    {
      cardIndex: 3,
      xPosition: 150,
      animation: "",
      flipped: false,
    },
  ]);

  // Left/right to move card. Space key to flip.
  const handleKeyDown = (event) => {
    if (!allowHotKeys) return;

    switch (event.key) {
      case "ArrowLeft": dispatch({ type: "cycle-left" }); break;
      case "ArrowRight": dispatch({ type: "cycle-right" }); break;
      case "ArrowUp": dispatch({ type: "got-card-correct" }); break;
      case "ArrowDown": dispatch({ type: "got-card-wrong" }); break;
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
            animation={c.animation}
            dispatch={dispatch}
          />
        })}
      </div>
    </>
  );
};

export default CardsReducer;