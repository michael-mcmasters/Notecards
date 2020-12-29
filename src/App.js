import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from "./components/js/Card.js";

function App() {
  const cards = [
    {
      id: 0,
      backgroundColor: "#3db10a",
      text: "Liskov Substituion Principle",
    },
    {
      id: 1,
      backgroundColor: "blue",
      text: "Interface Segregation Principle",
    },
    {
      id: 2,
      backgroundColor: "yellow",
      text: "Dependency Inversion",
    },
  ];

  return (
    <div className="App">
      <h1 className="title">Note Cards</h1>
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
