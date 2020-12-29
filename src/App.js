import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Cards from "./components/js/Cards.js";

function App() {
  return (
    <div className="App">
      <h1 className="title App-logo">Note Cards</h1>
      <Cards></Cards>
    </div>
  );
}

export default App;
