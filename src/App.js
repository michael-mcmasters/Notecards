import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { ColorThemeProvider } from "./components/custom_hooks/ColorThemeContext";
import Navbar from "./components/reusable/navbar/Navbar.js";
import HomePage from "./components/routing/homepage/HomePage.js";
import CardContainers from "./components/cards/CardContainers.js"

function App() {

  // <HomePage> must be last component in <switch> for routing to work.
  return (
    <Container>
      <ColorThemeProvider>

        <Router>
          <Navbar />
          <Switch>
            <Route path="/cards">
              <CardContainers></CardContainers>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>

      </ColorThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export default App;
