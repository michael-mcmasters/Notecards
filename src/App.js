import './App.css';
import CardContainers from "./components/js/CardContainers/CardContainers.js"

function App() {

  return (
    <div className="App">
      <h1 className="title App-logo">Java</h1>
      <CardContainers></CardContainers>
      <div className="controls-description">
        <p>Use the arrow keys to cycle</p>
        <p>Space bar to flip</p>
        <p>Up key if you knew the answer</p>
        <p>And click a card to edit its content</p>
      </div>
    </div>
  );
}

export default App;
