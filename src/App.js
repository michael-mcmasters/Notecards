import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from "./components/Card.js";

function App() {
  const cards = [
    {
      id: "0",
      backgroundColor: "#3db10a",
      text: "Liskov Substituion Principle",
    },
    {
      id: "1",
      backgroundColor: "#3db10a",
      text: "Interface Segregation Principle",
    },
    {
      id: "2",
      backgroundColor: "#3db10a",
      text: "Dependency Inversion",
    },
  ];

  return (
    <div className="App">
      <p>Note Cards</p>
      {cards.map(c => (
        <Card
          key={c.id}
          backgroundColor={c.backgroundColor}
          text={c.text}
        ></Card>
      ))}
    </div>
  );
}

export default App;
