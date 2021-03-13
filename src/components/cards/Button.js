import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Button = ({ buttonText, transitionDelay, onClick, userEditingCardText }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (userEditingCardText) {
      setClicked(false);
    }
  }, [clicked, userEditingCardText])

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
        transitionDelay={transitionDelay}
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
  transition-delay: ${props => props.transitionDelay};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default Button;