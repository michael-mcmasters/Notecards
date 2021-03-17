import React, { useContext } from 'react';
import styled from "styled-components";
import { ColorThemeContext } from "../custom_hooks/ColorThemeContext";
import { GiCardRandom } from "react-icons/gi";
import { Link, Redirect } from "react-router-dom";
import FeaturedCards from "./FeaturedCards.js";
import PopularDecks from "./PopularDecks.js"

const HomePage2 = () => {
  const colorTheme = useContext(ColorThemeContext);

  console.log(colorTheme);

  return (
    <>
      <FirstRow>
        <Icon>
          <GiCardRandom />
        </Icon>
        <ButtonContainer>
          <Button>Create Deck</Button>
          <Button>View Decks</Button>
        </ButtonContainer>
      </FirstRow>

      <SecondRow>
        <FeaturedCards />
        <PopularDecks />
      </SecondRow>
    </>
  );
};

const FirstRow = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(GiCardRandom)`
  color: white;
  height: 14rem;
  width: 14rem;
  margin-right: 5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Button = styled.button`
  padding: 1em 2em;
  margin: 0.5rem;
  background-color: #2A9D8F;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  border-radius: 10px;
  border: none;
  
`;

const SecondRow = styled.div`
  margin-top: 12rem;
  display: flex;
  justify-content: space-around;
`;

export default HomePage2;