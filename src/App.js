import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import HomePage from "./components/homepage/HomePage.js";
import HomePage2 from "./components/homepage2/HomePage2.js";
import CardContainers from "./components/cards/CardContainers.js"

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <HomePage2></HomePage2>
      {/* <h1 className="title App-logo">Java</h1>
      <CardContainers></CardContainers>
      <div className="controls-description">
        <p>Use the arrow keys to cycle</p>
        <p>Space bar to flip</p>
        <p>Up key if you knew the answer</p>
        <p>And click a card to edit its content</p>
      </div> */}
    </div>
  );
}

export default App;
