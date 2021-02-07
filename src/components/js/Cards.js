import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import cardsJSON from "../../resources/card-data.json";
import "../css/Cards.css";

export const AllowHotkeyContext = React.createContext();

export default function Cards() {
  const [allowHotKey, setAllowHotKey] = useState(true);

  const cards = cardsJSON.cards;

  useEffect(() => {
  }, [allowHotKey]);

  // Returns data at the given index and returns true if the index is in range.
  // If index is out of range, returns index 0 which has empty properties, and returns false.
  const getNewData = (index) => {
    if (index > 0 && index < cards.length) {
      return [cards[index], true];
    }
    return [cards[0], false];
  }

  const changeText = (index, newText) => {
    cards[index].frontText = newText;
  }

  const handleAllowHotKey = () => {
    setAllowHotKey(prevValue => !prevValue);
  }

  const getCardsJSX = () => {
    let cardsArr = [];
    let direction = -150;
    const start = -3, end = 3;
    for (let i = start; i <= end; i++) {
      if (i > 0 && i < cards.length) {
        cardsArr.push(<Card
          key={i}
          index={i}   // Index will change when card moves to opposing side of screen. A negative index means it hides its display. It is important to have negative indexes for calculations to work to get new card properties.
          direction={direction}
          backgroundColor={cards[i].backgroundColor}
          frontText={cards[i].frontText}
          backText={cards[i].backText}
          timesAccepted={cards[i].timesAccepted}
          getNewData={getNewData}
          changeText={changeText}
          setAllowHotkeys={handleAllowHotKey}
          amountOfData={cards.length}
        />);
      } else {
        // Cards with index out of range will have blank data and will be invisible. (display: none).
        cardsArr.push(<Card
          key={i}
          index={i}
          direction={direction}
          backgroundColor={``}
          frontText={``}
          backText={``}
          timesAccepted={0}
          getNewData={getNewData}
          changeText={changeText}
          setAllowHotkeys={handleAllowHotKey}
          amountOfData={cards.length}
        />);
      }

      direction += 50;
    }
    return cardsArr;
  }

  return (
    <div>
      <AllowHotkeyContext.Provider value={allowHotKey}>
        {getCardsJSX()}
      </AllowHotkeyContext.Provider>
    </div>
  )
}
