import React from 'react';
import DeckSlideshow from "../../reusable/deck_slideshow/DeckSlideshow";

const PopularDecks = () => {
  return (
    <DeckSlideshow title={"Click a deck to view it"} amntDecks={10} />
  );
};

export default PopularDecks;