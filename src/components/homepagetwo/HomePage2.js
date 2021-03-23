import React, { useContext } from 'react';
import styled from "styled-components";
import { ColorThemeContext } from "../custom_hooks/ColorThemeContext";
import { GiCardRandom } from "react-icons/gi";
import { Link } from "react-router-dom";
import FeaturedCards from "./FeaturedCards.js";
import PopularDecks from "./PopularDecks.js"

const HomePage2 = () => {
  const theme = useContext(ColorThemeContext);

  return (
    <>
      <FirstRow>
        <Icon theme={theme}>
          <GiCardRandom />
        </Icon>
        <ButtonContainer>
          <Link to="/cards">
            <Button theme={theme}>Create Deck</Button>
          </Link>
          <Link to="/cards">
            <Button theme={theme}>View Decks</Button>
          </Link>
        </ButtonContainer>
      </FirstRow>

      <SecondRow>
        {/* <FeaturedCards /> */}
        <PopularDecks />
      </SecondRow>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
  color: ${props => props.theme.icon};
  height: 14rem;
  width: 14rem;
  margin-right: 5em;
  
  @media(max-width: 675px) {
    margin-right: 1em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Button = styled.button`
  padding: 1em 2em;
  margin: 0.5rem;
  background-color: ${props => props.theme.btnBG};
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme.btnText};
  border-radius: 10px;
  border: none;
  
`;

const SecondRow = styled.div`
  /* background-color: rgba(0, 0, 0, 0.2);
  margin: 5em; */
  margin-top: 12rem;
  display: flex;
  justify-content: space-around;
  
  @media(max-width: 1225px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default HomePage2;