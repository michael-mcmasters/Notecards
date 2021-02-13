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
  console.log(cards)
  console.log(cards[0])

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

      <button style={{ padding: "4em" }} onClick={handleClick}></button>
    </>
  );
};

export default CardsReducer;