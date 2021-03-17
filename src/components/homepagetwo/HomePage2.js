import React from 'react';
import styled from "styled-components";
import { GiCardRandom } from "react-icons/gi";
import { Link } from "react-router-dom";
import FeaturedCards from "./FeaturedCards.js";
import PopularDecks from "./PopularDecks.js"

const HomePage2 = () => {
  return (
    <>
      <Account>
        <Link to="/" style={{ textDecoration: 'none' }}> {/* Override style to remove underline. Wasn't working when using styled-component's css */}
          Account
        </Link>
      </Account>

      <FirstRow>
        <Icon>
          <GiCardRandom />
        </Icon>
        <ButtonContainer>
          <Button>View Decks</Button>
          <Button>Create Deck</Button>
        </ButtonContainer>
      </FirstRow>

      <SecondRow>
        <FeaturedCards />
        <PopularDecks />
      </SecondRow>
    </>
  );
};

const Account = styled(Link)`
  margin: 1em;
  padding: 0.7em 1.2em;
  width: fit-content;
  background-color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;
  color: #1F2C76;
  
  position: fixed;
  right: 0;
  top: 0;
`;

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
  background-color: #1F2C76;
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