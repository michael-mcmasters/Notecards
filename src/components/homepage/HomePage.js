import React, { Component } from 'react';
import styled from "styled-components";
import Options from "./Options.js"
import FeaturedCards from "./FeaturedCard.js";
import PopularDecks from "./PopularDecks.js"

class HomePage extends Component {
  render() {
    return (
      <>
        <Options />
        <FeaturedCards />
        <PopularDecks />

        {/* <PopularDecksContainer>
          <PopularDecks />
        </PopularDecksContainer> */}
      </>
    );
  }
}



export default HomePage;