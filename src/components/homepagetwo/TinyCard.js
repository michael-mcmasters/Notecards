import React from 'react';
import styled, { css } from "styled-components";

const TinyCard = ({ card, xPosition, flipped }) => {
  return (
    <Container xPosition={xPosition}>
      <FlipCard flipped={flipped}>
        <Front backgroundColor={card.backgroundColor} scrollbarColor="white">
          <Content>
            {card.frontText}
          </Content>
        </Front>
        <Back scrollbarColor={card.backgroundColor}>
          <Content>
            {card.backText}
          </Content>
        </Back>
      </FlipCard>
    </Container>
  );
};

const Container = styled.div`
  /* float: left; */
  display: inline-block;
  position: absolute;
  left: ${props => props.xPosition}%;
  /* transition: 30s linear; */
  margin: 1rem;
  width: 8rem;
  height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background: none;
`;

const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const ScrollBar = css`
  div::-webkit-scrollbar {
    color: transparent;
    background-color: transparent;
    width: 10px;      // Width of verticle scrollbar
    height: 0px;      // 0px hides the horizontal scrollbar
  }

  div::-webkit-scrollbar-thumb:vertical{
    background: ${props => props.scrollbarColor};
    border-radius: 10px;
  } 
  
  div::-webkit-scrollbar-thumb::horizontal{
    height: 0px;
  }
  
  div::-webkit-scrollbar-corner {
    display: none;
  }
`;

const Front = styled.div`
  /* padding: 1rem 0; */
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;

  background-color: ${props => props.backgroundColor}; 
  
  ${ScrollBar}
`;

const Back = styled.div`
  /* padding: 1rem 0; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: scroll;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
  
  ${ScrollBar}
`;

const Content = styled.div`
    padding: 0.5rem 0.3rem;
    /* ${ScrollBar} */
`;

export default TinyCard;