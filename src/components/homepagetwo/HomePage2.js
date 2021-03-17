import React from 'react';
import styled from "styled-components";
import { GiCardRandom } from "react-icons/gi";

const HomePage2 = () => {
  return (
    <Container>
      <Icon>
        <GiCardRandom />
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10rem;
  display: flex;
`;

const Icon = styled(GiCardRandom)`
  color: white;
  height: 10rem;
  width: 10rem;
`;

export default HomePage2;