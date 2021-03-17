import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  return (
    // Set style here to get rid of underline. Property is ignored when set as a styled-component.
    <Account>
      <Link to="/" style={{ textDecoration: 'none' }}>
        Account
        </Link>
    </Account>
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

export default NavbarTwo;