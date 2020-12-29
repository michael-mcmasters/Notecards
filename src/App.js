import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from "./components/Card.js";

function App() {
  const [text, setText] = useState("Hello there");

  const changeText = () => {
    setText("wow");
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>{text}</p>
      <button onClick={changeText}></button>
      <Card></Card>
    </div>
  );
}

export default App;
