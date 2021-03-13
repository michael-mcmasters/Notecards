import React, { Component } from 'react';
import styled from "styled-components";
import PopularDecks from "./PopularDecks.js"

class HomePage extends Component {
  render() {
    return (
      <>
        home
        <OptionContainer>
          <Option><P>View Popular Decks</P></Option>
          <Option><P>Create Deck</P></Option>
        </OptionContainer>
        <PopularDecks />
      </>
    );
  }
}

const OptionContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
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

export default HomePage;