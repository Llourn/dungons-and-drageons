import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Sheet from "./components/Sheet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Characters">
              <Characters />
            </Route>
            <Route path="/Characters/:id">
              <Sheet />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
