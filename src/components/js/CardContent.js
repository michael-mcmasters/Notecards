import React from 'react';
import styled from "styled-components";

const CardContent = ({ text }) => {
  return (
    <Container>
      <Input
        value={text}
        onChange={() => { }}
        onFocus={() => { }}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

// Have to set height manually because textarea's don't have an auto height property, and they don't fill parent div's height.
const Input = styled.textarea`
  font-size: 30px;
  height: 240px;
  width: 100%;
  background-color: transparent;
  border: none;
  resize: none;
`;

const CancelButton = styled.button`
  position: relative;
  border: none;
  width: 4em;
  height: 4em;
  margin-bottom: 3em;
  margin-right: 1em;
  border-radius: 100px;
  background-color: ${props => props.pressed ? "green" : "red"};
  
  bottom: ${props => props.userEditingText ? "-5em" : "1em"};
  transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${props => props.userEditingText ? "0.2s" : "0"};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

const SaveButton = styled.button`
  position: relative;
  border: none;
  width: 4em;
  height: 4em;
  margin-bottom: 3em;
  border-radius: 100px;
  background-color: ${props => props.pressed ? "green" : "red"};
  
  bottom: ${props => props.userEditingText ? "-5em" : "1em"};
  transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${props => props.userEditingText ? "0.5s" : "0"};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default CardContent;