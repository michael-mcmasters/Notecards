import React, { useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

// function reducer(state, action) {
//   switch (action.type) {
//     case "get-next-index":
//       return { cards: state.cards, numOfCards: state.numOfCards }
//     case "increment-num-of-cards":
//       return { cards: state.cards, numOfCards: state.numOfCards + 1 }
//     default:
//       return state;
//   }
// }

function reducer(state, action) {
  switch (action.type) {
    case "cycle-left":
      return { cards: state.cards, numOfCards: state.numOfCards }
    case "cycle-right":
      return { cards: state.cards, numOfCards: state.numOfCards + 1 }
    default:
      return state;
  }
}

const CardsReducer = () => {
  const cards = cardsJSON.cards;

  let [cardContainers, dispatch] = useReducer(reducer, [
    {
      cardIndex: -3,
      xPosition: "-150",
      flipped: false,
    },
    {
      cardIndex: -2,
      xPosition: "-100",
      flipped: false,
    },
    {
      cardIndex: -1,
      xPosition: "-50",
      flipped: false,
    },
    {
      cardIndex: 0,
      xPosition: "0",
      flipped: false,
    },
    {
      cardIndex: 1,
      xPosition: "50",
      flipped: false,
    },
    {
      cardIndex: 2,
      xPosition: "100",
      flipped: false,
    },
    {
      cardIndex: 3,
      xPosition: "150",
      flipped: false,
    },
  ]);

  function handleClick() {
    // dispatch({ type: "cycle-left" })
  }


  return (
    <>
      {cardContainers.map(c => {
        if (c.cardIndex < 0 || c.cardIndex >= cards.length) c.cardIndex = 0;
        return <CardReducer
          card={c.card}
          cardIndex={c.index}
          xPosition={c.xPosition}
          flipped={c.flipped}
        />
      })}

      <button style={{ padding: "4em" }} onClick={handleClick}></button>
    </>
  );
};

export default CardsReducer;