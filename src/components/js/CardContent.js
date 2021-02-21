import React from 'react';
import styled from "styled-components";

const CardContent = ({ text }) => {
  return (
    <div>
      <Container>
        {text}
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 1rem;
  font-size: 30px;
`;

export default CardContent;