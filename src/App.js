import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import HomePage from "./components/homepage/HomePage.js";
import CardContainers from "./components/cards/CardContainers.js"

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/cards">Cards</Link>

        <Switch>
          <Route path="/cards">
            <div>Hello</div>
          </Route>
          <Route path="/">
            <Navbar></Navbar>
            <HomePage></HomePage>
          </Route>
        </Switch>
        {/* <h1 className="title App-logo">Java</h1>
      <CardContainers></CardContainers>
      <div className="controls-description">
        <p>Use the arrow keys to cycle</p>
        <p>Space bar to flip</p>
        <p>Up key if you knew the answer</p>
        <p>And click a card to edit its content</p>
      </div> */}
      </Router>
    </div>
  );
}

export default App;
