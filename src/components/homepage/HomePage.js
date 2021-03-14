import React, { Component } from 'react';
import styled from "styled-components";
import Options from "./Options.js"
import PopularDecks from "./PopularDecks.js"

class HomePage extends Component {
  render() {
    return (
      <>
        <Options />
        <PopularDecks />

        {/* <PopularDecksContainer>
          <PopularDecks />
        </PopularDecksContainer> */}
      </>
    );
  }
}



export default HomePage;