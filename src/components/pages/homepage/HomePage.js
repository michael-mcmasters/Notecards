import React, { useContext } from 'react';
import styled from "styled-components";
import { ColorThemeContext } from "../../custom_hooks/ColorThemeContext";
import { GiCardRandom } from "react-icons/gi";
import { Link } from "react-router-dom";
import FeaturedCards from "./FeaturedCards.js";
import DeckSlideshow from "../../reusable/deck_slideshow/DeckSlideshow.js"

const HomePage = () => {
  const theme = useContext(ColorThemeContext);

  return (
    <>
      <FirstRow>
        <Icon theme={theme}>
          <GiCardRandom />
        </Icon>
        <ButtonContainer>
          <Link to="/create-deck">
            <Button theme={theme}>Create Deck</Button>
          </Link>
          <Link to="/popular-decks">
            <Button theme={theme}>View Decks</Button>
          </Link>
        </ButtonContainer>
      </FirstRow>

      <SecondRow>
        {/* <FeaturedCards /> */}
        <DeckSlideshow />
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
  cursor: pointer;
`;

const SecondRow = styled.div`
  margin-top: 12rem;
  display: flex;
  justify-content: space-around;
  
  @media(max-width: 1225px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default HomePage;