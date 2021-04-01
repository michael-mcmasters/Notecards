import React, { useEffect, useReducer } from 'react';
import styled from "styled-components";
import cardsJSON from "../../../resources/card-data.json";
import CardContainer from "./CardContainer";

const CardContainers = () => {
  const [state, dispatch] = useReducer(reducer, {
    allowHotKeys: true,
    cardsArr: cardsJSON.cards,
    containers: [
      {
        cardIndex: -4,
        xPosition: -150,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: -3,
        xPosition: -100,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: -2,
        xPosition: -50,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: -1,
        xPosition: 0,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: 0,   // On init, this container appears at the center of screen. There are an equal number of containers before and after it.
        xPosition: 50,  // More containers gives a smoother experience for the user if they are holding the arrow key down to cycle fast. Because containers disappearing will happen off screen.
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: 1,
        xPosition: 100,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: 2,
        xPosition: 150,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: 3,
        xPosition: 200,
        transition: "",
        animation: "",
        flipped: false,
      },
      {
        cardIndex: 4,
        xPosition: 250,
        transition: "",
        animation: "",
        flipped: false,
      },
    ]
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!state.allowHotKeys)
        return;

      if (event.target === document.body) {
        if (event.key === " " || event.key === "ArrowUp" || event.key === "ArrowDown") {
          event.preventDefault();   // Prevent keys from scrolling window.
        }
      }

      switch (event.key) {
        case "ArrowLeft": dispatch({ type: "cycle-left" }); break;
        case "ArrowRight": dispatch({ type: "cycle-right" }); break;
        case "ArrowUp": dispatch({ type: "got-card-correct" }); break;
        case "ArrowDown": dispatch({ type: "got-card-wrong" }); break;
        case " ": dispatch({ type: "flip" }); break;
        default: break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.allowHotKeys]);

  // Returns the card the container will display. If index is out of range, the container will be invisible (display: none).
  function getCardAtIndex(cardsArr, cardIndex) {
    if (cardIndex >= 0 && cardIndex < cardsArr.length)
      return cardsArr[cardIndex];
    return null;
  }

  return (
    <>
      <Title>Java</Title>

      <CardGallary>
        {state.containers.map((c, keyIndex) => (
          <CardContainer
            key={keyIndex}
            container={c}
            card={getCardAtIndex(state.cardsArr, c.cardIndex)}
            dispatch={dispatch}
          />
        ))}
      </CardGallary>

      <ControlsDescription>
        <p>Use the arrow keys to cycle</p>
        <p>Space bar to flip</p>
        <p>Up key if you knew the answer</p>
        <p>And click a card to edit its content</p>
      </ControlsDescription>

    </>
  );
};




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

// Flips only the center container.
function flipContainer({ containers }) {
  const centerIndex = getCenterContainerIndex(containers);
  return containers.map(({ ...c }, index) => {                        // { ...c } to copy objects in array so we are not manipulating state before React sees it.
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
  const amountToMove = (direction === "left") ? -50 : 50;
  return state.containers.map(({ ...c }, index) => {
    c.animation = "";                                                                 // Cancels any current animations in progress. (Containers may overlap with one another without this.)
    c.flipped = false;                                                                // Makes sure flipped containers unflip before moving.

    c.xPosition = state.containers[index].xPosition + amountToMove;                   // How far from the left side of screen this container will be. (CSS property.)
    c.cardIndex = state.containers[index].cardIndex;                                  // The card this container will display.
    c.transition = "0.39s ease";                                                      // Smooths movement.
    if (c.xPosition < -150) {
      c.xPosition = 250;
      c.cardIndex += numOfContainers;
      c.transition = "";
    } else if (c.xPosition > 250) {
      c.xPosition = -150;
      c.cardIndex -= numOfContainers;
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
  if (index === -1) throw new Error("Unable to find index of the center card container");
  return index;
}

// Returns true is another card exists in the cycle direction.
// For example, if user wants to cycle right, this returns true if there exists another card to the right of the current center card. And false if not.
function cardExistsInDirection(containers, cardsArr, direction) {
  const centerContainerIndex = getCenterContainer(containers).cardIndex;
  const nextContainerIndex = (direction === "left") ? centerContainerIndex + 1 : centerContainerIndex - 1;
  if (nextContainerIndex >= 0 && nextContainerIndex < cardsArr.length)
    return true;
  return false;
}

// ToDo: Use this to fetch card data from the backend.
// useEffect(async () => {
//   //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // const response = await fetch("http://localhost:8080/");
//   // const data = await response.json();
//   // console.log(data);
//   // console.log(data[0].backText)

//   // const newCardsArr = [];
//   // newCardsArr.push({ backgroundColor: "#", frontText: " ", backText: "", timesAccepted: 0 });   // make sure first card is empty.
//   // for (let d of data) {
//   //   console.log("loop");
//   //   newCardsArr.push(d);
//   // }

//   // setCardsArr(newCardsArr);
// }, [])



const Title = styled.h1`
  color: #1d3557;
  font-size: 4rem;
  padding-bottom: 15px;
  margin-bottom: 0;
  border-bottom: 1px solid #457b9d;
`;

const CardGallary = styled.div`
  display: flex;
`;

const ControlsDescription = styled.div`
  margin-top: 28rem;
  font-size: 2.4em;
`;

export default CardContainers;