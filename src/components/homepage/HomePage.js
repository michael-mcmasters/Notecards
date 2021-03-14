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

        <RowContainer>
          <FeaturedCards />
          <PopularDecks />
        </RowContainer>
      </>
    );
  }
}

const RowContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
`;



export default HomePage;