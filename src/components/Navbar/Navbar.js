import React from 'react';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <FirstItem>Home</FirstItem>
      <Item>Popular Cards</Item>
      <Item>Account</Item>

    </Container>
  );
};

const Container = styled.div`
  padding: 1.7rem;
  border: 1px solid red;
  background-color: #0094E8;
  display: flex;
`;

const Item = styled.div`
  
`;

const FirstItem = styled.div`
  margin-right: auto;
`;

export default Navbar;