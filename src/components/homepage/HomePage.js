import React, { Component } from 'react';
import styled from "styled-components";
import PopularDecks from "./PopularDecks.js"

class HomePage extends Component {
  render() {
    return (
      <>
        <OptionContainer>
          <Option><P>View Popular Decks</P></Option>
          <Option><P>Create Deck</P></Option>
        </OptionContainer>

        {/* <PopularDecksContainer>
          <PopularDecks />
        </PopularDecksContainer> */}
      </>
    );
  }
}

const OptionContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  background-color: yellow;
`;

const Option = styled.div`
  margin: 0 3rem;
  width: 25rem;
  height: 15rem;
  border-radius: 10px;
  background-color: red;
  display: flex;
`;

const P = styled.p`
  margin: auto;
`;

const PopularDecksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default HomePage;