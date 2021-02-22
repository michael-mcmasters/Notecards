import { useEffect } from 'react';
import './App.css';
import Cards from "./components/js/Cards.js";
import CardsReducer from "./components/js/CardsReducer.js"

function App() {

  return (
    <div className="App">
      <h1 className="title App-logo">Java</h1>
      <Cards></Cards>
      <div className="controls-description">
        {/* <p>Use the arrow keys to cycle</p>
        <p>Space bar to flip</p>
        <p>Up key if you knew the answer</p>
        <p>And click a card to edit</p> */}
      </div>
      <CardsReducer></CardsReducer>
    </div>
  );
}

export default App;
