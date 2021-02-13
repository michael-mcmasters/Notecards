import React, { useEffect, useReducer } from 'react';
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

const getObject = (state, increment) => {
  let incrementAmount = 1;
  if (increment === false) incrementAmount = -1;

  return [
    {
      cardIndex: state[0].cardIndex + incrementAmount,
      xPosition: "-150",
      flipped: false,
    },
    {
      cardIndex: state[1].cardIndex + incrementAmount,
      xPosition: "-100",
      flipped: false,
    },
    {
      cardIndex: state[2].cardIndex + incrementAmount,
      xPosition: "-50",
      flipped: false,
    },
    {
      cardIndex: state[3].cardIndex + incrementAmount,
      xPosition: "0",
      flipped: false,
    },
    {
      cardIndex: state[4].cardIndex + incrementAmount,
      xPosition: "50",
      flipped: false,
    },
    {
      cardIndex: state[5].cardIndex + incrementAmount,
      xPosition: "100",
      flipped: false,
    },
    {
      cardIndex: state[6].cardIndex + incrementAmount,
      xPosition: "150",
      flipped: false,
    },
  ]
}

function reducer(state, action) {
  console.log(typeof state[4].cardIndex);
  switch (action.type) {
    case "cycle-left":
      console.log("got it")
      //return { cards: state.cards, numOfCards: state.numOfCards }
      return getObject(state, true);
    case "cycle-right":
      // return { cards: state.cards, numOfCards: state.numOfCards + 1 }
      return getObject(state, true);
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