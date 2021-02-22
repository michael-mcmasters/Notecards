import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./Button";

const CardContent = ({ text, cardIndex, side, dispatch }) => {
  const [userEditingText, setUserEditingText] = useState(false);
  const [editedText, setEditedText] = useState("");   // The new text the user types into the card. text will be set to the edtedText when user clicks the save button.

  const handleInputFocus = () => {
    dispatch({ type: "enable-hot-keys", payload: false });
    setUserEditingText(true);
    setEditedText(text);
  }

  const handleInputUnfocus = () => {
    dispatch({ type: "enable-hot-keys", payload: true });
    setTimeout(() => {  // Use timeout because otherwise, when hitting the save button, card will temporarily show the old text while updating.
      setUserEditingText(false);
      console.log("set to false");
    }, 100);
  }

  const handleUserTyping = (event) => {
    setEditedText(event.target.value);
  }

  const handleCancelButton = () => {
    setUserEditingText(false);
  }

  const handleSaveButton = () => {
    dispatch({ type: "update-text", payload: [cardIndex, side, editedText] });
  }

  return (
    <Container>
      <Input
        value={userEditingText ? editedText : text}
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
  padding: 2rem;
`;

// Have to set height manually because textarea's don't have an auto height property, and they don't fill parent div's height.
const Input = styled.textarea`
  font-size: 30px;
  height: 240px;
  width: 100%;
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

export default CardContent;





