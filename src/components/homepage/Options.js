import React from 'react';
import styled from "styled-components";

const Options = () => {
  return (
    <div>
      <OptionContainer>
        <Option><P>View Popular Decks</P></Option>
        <Option><P>Create Deck</P></Option>
      </OptionContainer>
    </div>
  );
};

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

export default Options;