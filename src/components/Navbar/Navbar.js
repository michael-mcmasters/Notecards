import React from 'react';
import styled from "styled-components";

const Navbar = () => {
  return (
      <Container>
        <FirstItem>Home</FirstItem>
        <Item>My Cards</Item>
        <Item>Popular Cards</Item>
        
      </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  border: 1px solid red;
  display: flex;
  
`;

const Item = styled.div`
  
`;

const FirstItem = styled.div`
  margin-right: auto;
`;

export default Navbar;