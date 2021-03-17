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
  background-image: linear-gradient(to top, #DB7092 20%, #D9A059 80%);
  height: 100vh;
`;

const Icon = styled(GiCardRandom)`
  margin-top: 10rem;
  color: white;
  height: 10rem;
  width: 10rem;
`;

export default HomePage2;