import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Button = ({ buttonText, userEditingCardText, onClick }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
  }, [userEditingCardText])

  const handleOnClick = () => {
    setClicked(true);
    onClick();
  }

  return (
    <div>
      <StyledButton
        onClick={handleOnClick}
        clicked={clicked}
        userEditingText={userEditingCardText}
      >
        {buttonText}
      </StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  position: relative;
  border: none;
  width: 4em;
  height: 4em;
  margin-bottom: 3em;
  margin-right: 1em;
  border-radius: 100px;
  background-color: ${props => props.clicked ? "green" : "red"};
  
  bottom: ${props => props.userEditingText ? "1em" : "-5em"};
  transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${props => props.clicked ? "0" : "0.2s"};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;
// /* transition-delay: ${props => props.userEditingText ? "0.2s" : "0"}; */

export default Button;