import React, { useReducer } from 'react';
import CardReducer from "./CardReducer";
import cardsJSON from "../../resources/card-data.json";

function reducer(state, action) {
  switch (action.type) {
    case "get-next-index":
      return { cards: state.cards, numOfCards: state.numOfCards }
    case "increment-num-of-cards":
      return { cards: state.cards, numOfCards: state.numOfCards + 1 }
    default:
      return state;
  }
}

const CardsReducer = () => {
  const cards = cardsJSON.cards;
  const [state, dispatch] = useReducer(reducer, { cards: cards, numOfCards: 1 })

  function handleClick() {
    dispatch({ type: "increment-num-of-cards" })
  }

  return (
    <div>
      <CardReducer></CardReducer>
      <p>{state.numOfCards}</p>
      <button style={{ padding: "4em" }} onClick={handleClick}></button>
    </div>
  );
};

export default CardsReducer;