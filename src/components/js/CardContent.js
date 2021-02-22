import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./Button";

const CardContent = ({ cardText, side, dispatch }) => {
  const [userEditingText, setUserEditingText] = useState(false);
  const [editedText, setEditedText] = useState("");

  const handleInputFocus = () => {
    dispatch({ type: "enable-hot-keys", payload: false });
    setUserEditingText(true);
    setEditedText(cardText);
  }

  const handleInputUnfocus = () => {
    dispatch({ type: "enable-hot-keys", payload: true });
    setUserEditingText(false);
    setEditedText(cardText);
  }

  const handleUserTyping = (event) => {
    setEditedText(event.target.value);
  }

  const handleCancelButton = () => {
    console.log("cancel button");
    setUserEditingText(false);
  }

  const handleSaveButton = () => {
    console.log("save button");
    dispatch({ type: "update-text", payload: side });
    setUserEditingText(false);
  }

  return (
    <Container>
      <Input
        value={userEditingText ? editedText : cardText}
        onFocus={handleInputFocus}
        onBlur={handleInputUnfocus}
        onChange={handleUserTyping}
      />
      <div class="flex justify-end">
        <Button
          buttonText={"Cancel"}
          onClick={handleCancelButton}
          transitionDelay={"0.2s"}
          userEditingCardText={userEditingText}
        />
        <Button
          buttonText={"Save"}
          onClick={handleSaveButton}
          transitionDelay={"0.4s"}
          userEditingCardText={userEditingText}
        />
      </div>
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

export default CardContent;





