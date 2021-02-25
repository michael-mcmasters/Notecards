import React, { useEffect, useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

// Flips only the center container.
function flipContainer({ containers }) {
  const centerIndex = getCenterContainerIndex(containers);
  return containers.map(({ ...c }, index) => {              // Copy objects in array with spread operator so we are not manipulating state before React sees it.
    if (index === centerIndex) {
      c.flipped = !containers[index].flipped;
    }
    return c;
  })
}

// Moves all containers left or right. There are 7 containers that are recycled to each represent a card in the array. (Object Pooling.)
// The container at the very end (off-screen) will move to the opposing side of the screen and will update with a new card to display for when it is back on screen.
function moveContainers(state, direction) {
  if (!cardExistsInDirection(state.containers, state.cardsArr, direction))
    return state.containers;

  const numOfContainers = state.containers.length;
  const xPositionAmountToMove = (direction === "left") ? -50 : 50;
  return state.containers.map(({ ...c }, index) => {
    c.animation = "";                                                                 // Cancels any current animations in progress before moving.
    c.flipped = false;                                                                // Makes sure flipped containers unflip before moving.

    c.cardIndex = state.containers[index].cardIndex;                                  // The card properties this container will show.
    c.xPosition = state.containers[index].xPosition + xPositionAmountToMove;          // How far from left side of screen container will be. (CSS property.)
    c.transition = "0.39s ease";                                                      // Smooths movement.
    if (c.xPosition < -150) {
      c.cardIndex += numOfContainers;
      c.xPosition = 150;
      c.transition = "";
    } else if (c.xPosition > 150) {
      c.cardIndex -= numOfContainers;
      c.xPosition = -150;
      c.transition = "";
    }
    return c;
  });
}

// Assigns container the name of a CSS animation which plays on the next render.
function addAnimation({ containers }, animation) {
  const centerIndex = getCenterContainerIndex(containers);
  return containers.map(({ ...c }, index) => {
    if (index === centerIndex) {
      c.animation = animation;
    }
    return c;
  })
}

// Saves data to array so that when container displays a new card, the data is not lost.
// ToDo: Save to backend.
function saveEditedText([...cardsArr], [cardIndex, side, editedText]) {
  const sideOfCardText = (side === "front") ? "frontText" : "backText";
  cardsArr[cardIndex][sideOfCardText] = editedText;
  return cardsArr;
}

// The container directly at the center of the screen
function getCenterContainer(containers) {
  const index = getCenterContainerIndex(containers);
  return containers[index];
}

function getCenterContainerIndex(containers) {
  const index = containers.findIndex(c => c.xPosition === 50);
  if (index === -1) throw "Unable to find index of the center card container";
  return index;
}

// Returns true is another card exists in the cycle direction.
// For example, if user wants to cycle right, this returns true if there exists another card to the right of the current center card. And false if not.
function cardExistsInDirection(containers, cardsArr, direction) {
  const centerContainerIndex = getCenterContainer(containers).cardIndex;
  const nextContainerIndex = (direction === "left") ? centerContainerIndex + 1 : centerContainerIndex - 1;
  if (nextContainerIndex <= 0 || nextContainerIndex > cardsArr.length - 1)    // Pretend index 0 is out of range because it is reserved for cards showing display: none.
    return false;
  return true;
}

function reducer(state, action) {
  switch (action.type) {
    case "enable-hot-keys":
      return {
        ...state,
        allowHotKeys: action.payload
      }
    case "flip":
      return {
        ...state,
        containers: flipContainer(state)
      }
    case "cycle-left":
      return {
        ...state,
        containers: moveContainers(state, "left")
      }
    case "cycle-right":
      return {
        ...state,
        containers: moveContainers(state, "right")
      }
    case "got-card-correct":
      return {
        ...state,
        containers: addAnimation(state, "CardBumpUpAnimation")
      }
    case "got-card-wrong":
      return {
        ...state,
        containers: addAnimation(state, "CardBumpDownAnimation")
      }
    case "update-text":
      return {
        ...state,
        cardsArr: saveEditedText(state.cardsArr, action.payload)
      }
    default:
      return state;
  }
}

const CardsReducer = () => {

  const containers = [
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
  ];

  let [state, dispatch] = useReducer(reducer, {
    containers: containers,
    cardsArr: cardsJSON.cards,
    allowHotKeys: true
  });

  // Left/right to move card. Space key to flip.
  function handleKeyDown(event) {
    if (!state.allowHotKeys) return;

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
  }, [state]);  // Without this, space and arrow keys will move card when user is editing its text.

  // ToDo: Use this to fetch card data from the backend.
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

  // Returns card from array. If cardIndex is out of bounds, defaults it to index 0 which will hide the card from appearing on the page. (display: none.)
  function getCardAtIndex(cardsArr, cardIndex) {
    if (cardIndex > 0 && cardIndex < cardsArr.length)
      return cardsArr[cardIndex];
    return cardsArr[0];
  }

  return (
    <>
      <div className="flex">
        {state.containers.map((c, keyInd) => {
          return <CardReducer
            key={keyInd}
            card={getCardAtIndex(state.cardsArr, c.cardIndex)}
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