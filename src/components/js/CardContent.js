import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const CardContent = ({ cardText, dispatch }) => {
  const [text, setText] = useState(cardText);
  const [textBeforeEditing, setTextBeforeEditing] = useState("");

  // useState only sets text to the very first props value ever given.
  // This makes sure text is updated when a new props value is given.
  useEffect(() => {
    setText(cardText);
  }, [cardText])

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleInputFocus = () => {
    dispatch({ type: "enable-hot-keys", payload: false });
    setTextBeforeEditing(text);
  }

  const handleInputUnfocus = () => {
    dispatch({ type: "enable-hot-keys", payload: true });
    setText(textBeforeEditing);
  }

  return (
    <Container>
      <Input
        value={text}
        onFocus={handleInputFocus}
        onBlur={handleInputUnfocus}
        onChange={handleChange}
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