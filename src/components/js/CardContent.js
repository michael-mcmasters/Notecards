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
          userEditingCardText={userEditingText}
          onClick={handleCancelButton}
        />
        <Button
          buttonText={"Save"}
          userEditingCardText={userEditingText}
          onClick={handleSaveButton}
        />
        {/* <CancelButton userEditingText={userEditingText}
          // pressed={cancelPressed}
          onClick={() => handleCancelButton()}
        // onBlur={() => setCancelPressed(false)}
        >
          Cancel
        </CancelButton> */}
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

const CancelButton = styled.button`
  position: relative;
  border: none;
  width: 4em;
  height: 4em;
  margin-bottom: 3em;
  margin-right: 1em;
  border-radius: 100px;
  background-color: ${props => props.pressed ? "green" : "red"};
  
  bottom: ${props => props.userEditingText ? "1em" : "-5em"};
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





