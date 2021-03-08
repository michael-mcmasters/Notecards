import React, { useState, useEffect } from 'react';
import styled, { css } from "styled-components";

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
  
  /* bottom: ${props => props.userEditingText ? "1em" : "-5em"}; */
  /* display: none; */
  visibility: hidden;
  transition: 0.4s;
  width: 0;
  height: 0;
  padding: 0;
  font-size: 0em;
  ${props => props.userEditingText === true && css`
      /* display: inherit; */
      visibility: inherit;
      /* height: 3.5em; */
      /* width: 3.5em; */
      padding: 1em;
      font-size: 1rem;
`}
  /* transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); */
  /* transition-delay: ${props => props.transitionDelay}; */
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default Button;