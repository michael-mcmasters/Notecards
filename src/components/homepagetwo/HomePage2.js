import React from 'react';
import styled from "styled-components";
import { GiCardRandom } from "react-icons/gi";

const HomePage2 = () => {
  return (
    <Background>
      <Icon>
        <GiCardRandom />
      </Icon>
    </Background>
  );
};

const Background = styled.div`
  background-color: blue;
  height: 100vh;
`;

const Icon = styled(GiCardRandom)`
  height: 10rem;
  width: 10rem;
`;

export default HomePage2;