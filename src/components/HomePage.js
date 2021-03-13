import React, { Component } from 'react';
import styled, { css, keyframes } from "styled-components";

class HomePage extends Component {
  render() {
    return (
      <div>
        home
        <Container>
          <Option><P>View Popular Decks</P></Option>
          <Option><P>Create Deck</P></Option>
        </Container>
      </div>
    );
  }
}

const Flex = css`
  
`;

const Container = styled.div`
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