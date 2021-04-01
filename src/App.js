import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ColorThemeProvider } from "./components/custom_hooks/ColorThemeContext";
import NavbarTwo from "./components/navbar/NavbarTwo.js";
import HomePage from "./components/homepage/HomePage.js";
import CardContainers from "./components/cards/CardContainers.js"

function App() {

  return (
    <div className="App">
      <ColorThemeProvider>

        <Router>

          <NavbarTwo />

          <Switch>
            <Route path="/cards">
              <h1 className="title App-logo">Java</h1>
              <CardContainers></CardContainers>
              <div className="controls-description">
                <p>Use the arrow keys to cycle</p>
                <p>Space bar to flip</p>
                <p>Up key if you knew the answer</p>
                <p>And click a card to edit its content</p>
              </div>
            </Route>

            {/* Home path must be last path for router to work */}
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>

      </ColorThemeProvider>
    </div>
  );
}

export default App;
