import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { ColorThemeProvider } from "./components/custom_hooks/ColorThemeContext";
import Navbar from "./components/reusable/navbar/Navbar";
import Account from "./components/pages/account/Account";
import CreateDeck from "./components/pages/create_deck/CreateDeck";
import PopularDecks from "./components/pages/popular_decks/PopularDecks";
import HomePage from "./components/pages/homepage/HomePage";
import CardContainers from "./components/pages/cards/CardContainers"

function App() {

  // <HomePage> must be last component in <switch> for routing to work.
  return (
    <Container>
      <ColorThemeProvider>

        <Router>
          <Navbar />
          <Switch>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/create-deck">
              <CreateDeck />
            </Route>
            <Route path="/popular-decks">
              <PopularDecks />
            </Route>
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
