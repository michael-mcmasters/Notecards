import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <NavContainer>
        <FirstItem><Link to="/">Home</Link></FirstItem>
        <Item><Link to="/cards">My Decks</Link></Item>
        <Item><Link to="/">Account</Link></Item>
      </NavContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: sticky;
  top: 0; */
`;

const NavContainer = styled.div`
  padding: 1.7rem;
  background-color: #0094E8;
  display: flex;
`;

const Item = styled.div`
  
`;

const FirstItem = styled.div`
  margin-right: auto;
`;

export default Navbar;