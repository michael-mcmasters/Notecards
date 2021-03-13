import React from 'react';
import styled from "styled-components";

const PopularDecks = () => {
  return (
    <div>
      <Wrapper>
        <Container>
          Java: <Gallary />
        </Container>
        <Container>
          Spanish: <Gallary />
        </Container>
        <Container>
          State Capitals: <Gallary />
        </Container>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;
`;

const Container = styled.div`
  display: flex;
`;

const Gallary = styled.div`

`;

export default PopularDecks;