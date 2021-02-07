import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { AllowHotkeyContext } from "./Cards";
import "../css/Card.css";

export default function Card(props) {

  const allowHotKeys = useContext(AllowHotkeyContext);

  const [cycleIndex, setCycleIndex] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const [xPosition, setXPosition] = useState(props.xPosition);
  const [transition, setTransition] = useState("");
  const [index, setIndex] = useState(props.index);
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
  const [frontText, setFrontText] = useState(props.frontText);
  const [backText, setBackText] = useState(props.backText);
  const [display, setDisplay] = useState(() => (index > 0 && index < props.amountOfData) ? "" : "none");
  const [savePressed, setSavePressed] = useState(false);
  const [cancelPressed, setCancelPressed] = useState(false);
  const [backTextBeforeEdit, setBackTextBeforeEdit] = useState(backText);
  const [timesAccepted, setTimesAccepted] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flipped, xPosition, index, cycleIndex, allowHotKeys, savePressed, cancelPressed, backTextBeforeEdit, timesAccepted]);


  // Left/right to move card. Space key to flip.
  const handleKeyDown = (event) => {
    // Don't allow hotkeys when typing into a card.
    if (allowHotKeys === false) return;

    if (event.key === " ") {            // space key
      if (xPosition === 50) {           // Only center card should flip. We know it is the center card if its position is at 50.
        setFlipped(!flipped);
      }
    }
    else if (event.key === "ArrowLeft") {
      if (cycleIndex <= props.amountOfData - 2) {
        setCycleIndex(prevCycleIndex => prevCycleIndex + 1);
        handleMoveCard("left");
      }
    }
    else if (event.key === "ArrowRight") {
      if (cycleIndex - 1 >= 1) {
        setCycleIndex(prevCycleIndex => prevCycleIndex - 1);
        handleMoveCard("right");
      }
    }
    else if (event.key === "ArrowUp") {
      if (xPosition === 50) {
        handleCardCorrect();
      }
    }
  }

  // Object pooling: There are only 7 cards at a given time.
  // Arrow keys move the card. When the card is off screen, it repositions to the opposing side of the screen and receives new properties to display its new card information.
  const handleMoveCard = (newDirection) => {
    const cardsCount = 7;
    const amountToMove = 50;
    const leftMostPosition = -150;
    const rightMostPosition = 150;
    const transition = "0.39s ease";

    setFlipped(false);

    if (newDirection === "left") {
      // If card is at edge of window, quickly moves it to opposite side. Updates with new card properties.
      if (xPosition <= leftMostPosition) {
        setXPosition(rightMostPosition);
        setTransition("");
        getNewCardProperties(index + cardsCount);
        // If card is  not at edge of window, move it. Make sure it has a smooth transition property.
      } else {
        setXPosition(xPosition - amountToMove);
        setTransition(transition);
      }
    }
    // Same as above but in the opposite direction.
    else if (newDirection === "right") {
      if (xPosition >= rightMostPosition) {
        setXPosition(leftMostPosition);
        setTransition("");
        getNewCardProperties(index - cardsCount);
      } else {
        setXPosition(xPosition + amountToMove);
        setTransition(transition);
      }
    }
  }

  // Get new properties to display.
  const getNewCardProperties = (newIndex) => {
    const [newProperties, indexInRange] = props.getNewData(newIndex);
    setBackgroundColor(newProperties.backgroundColor);
    setFrontText(newProperties.frontText);
    setBackText(newProperties.backText);
    setTimesAccepted(newProperties.timesAccepted);
    setBackTextBeforeEdit(newProperties.backText);
    if (indexInRange === false) {
      setDisplay("none");
    } else {
      setDisplay("");
    }
    // Set index even if it is out of range, so that when card moves to opposing side of screen, calculations work. Even for negative numbers.
    setIndex(newIndex);
  };

  const getBackFontSize = (charCount) => {
    if (charCount < 22) {
      return "28px;"
    } else if (charCount < 320) {
      return "24px;"
    } else if (charCount < 520) {
      return "18px"
    } else {
      console.log(`card ${index} has a character length of ${charCount}. Its text may not fit on the card.`);
      return "10px";
    }
  }

  const handleCardCorrect = () => {
    console.log("Correct!")
    setTimesAccepted(prevTimesAccepted => prevTimesAccepted + 1);
  }

  const handleInputFocus = () => {
    props.setAllowHotkeys(false)
    setBackTextBeforeEdit(backText);
  }

  // User can edit the text. Press enter to save it.
  const handleTypingNewText = (event) => {
    setBackText(event.target.value);
  }

  const handleCancelButton = () => {
    setBackText(backTextBeforeEdit);
    setCancelPressed(true);
  }

  const handleSaveButton = () => {
    setSavePressed(true);
    setBackTextBeforeEdit(backText);
  }

  return (
    <FlipCardContainer display={display} xPosition={xPosition} cardAcceped={timesAccepted > props.timesAccepted} transition={transition}>
      <FlipCard flipped={flipped}>
        <Front backgroundColor={backgroundColor}>
          <FontContainer>
            <p>{frontText}</p>
          </FontContainer>
        </Front>
        <Back fontSize={getBackFontSize(backText.length)}>
          <FontContainer>
            <Input value={backText} onChange={handleTypingNewText}
              onFocus={() => { handleInputFocus() }}
              onBlur={() => props.setAllowHotkeys(true)}
            />
            <div class="flex justify-end">
              <CancelButton userEditingText={allowHotKeys}
                pressed={cancelPressed}
                onClick={() => handleCancelButton()}
                onBlur={() => setCancelPressed(false)}>
                Cancel
              </CancelButton>
              <SaveButton userEditingText={allowHotKeys}
                pressed={savePressed}
                onClick={() => handleSaveButton(true)}
                onBlur={() => setSavePressed(false)}>
                Save
                </SaveButton>
            </div>
          </FontContainer>
        </Back>
      </FlipCard>
    </FlipCardContainer >
  );
};

const cardBumpUpAnimation = keyframes`
   50% { margin-top: 1rem; }
`;

// left moves card into position, pushing it away from the left side of the screen.
// transform -50% offsets half of card's width so it centers around its own axis.
const FlipCardContainer = styled.div`
    display: ${props => props.display};
    width: 450px;
    height: 320px;
    background: none;
    margin: 0;
    margin-top: 2rem;
    cursor: pointer;
    position: absolute;
    transition: ${props => props.transition};

    left: ${props => props.xPosition}%;
    transform: translateX(-50%);
    -webkit-transform:translateX(-50%);
    
    animation-name: ${props => props.cardAcceped ? cardBumpUpAnimation : ""};
    animation-duration: 0.4s;
`;

const FlipCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Front = styled.div`
    font-size: 28px;

    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;

    background-color: ${props => props.backgroundColor};
`;

const Back = styled.div`
    font-size: ${props => props.fontSize};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    background: #fafafa;
    color: #333;
    text-align: center;
    transform: rotateY(180deg);
`;

const FontContainer = styled.div`
  padding: 1rem;
`;

// Have to set height manually because textarea's don't have an auto height property, and they don't fill parent div's height.
const Input = styled.textarea`
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
