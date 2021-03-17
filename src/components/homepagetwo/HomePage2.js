import React from 'react';
import styled from "styled-components";
import { GiCardRandom } from "react-icons/gi";

const HomePage2 = () => {
  return (
    <FlexContainer>
      <Icon>
        <GiCardRandom />
      </Icon>
      <ButtonContainer>
        <Button>View Decks</Button>
        <Button>Create Deck</Button>
      </ButtonContainer>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(GiCardRandom)`
  color: white;
  height: 13rem;
  width: 13rem;
  margin-right: 6em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Button = styled.button`
  padding: 1em 1em;
  margin: 0.5rem;
  background-color: #1F2C76;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  border-radius: 10px;
  border: none;
  
`;

export default HomePage2;