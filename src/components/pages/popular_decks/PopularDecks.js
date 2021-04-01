import React from 'react';
import styled from "styled-components";
import DeckSlideshow from "../../reusable/deck_slideshow/DeckSlideshow";

const PopularDecks = () => {
  return (
    <Container>
      <DeckSlideshow />
    </Container>
  );
};

const Container = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
`;

export default PopularDecks;