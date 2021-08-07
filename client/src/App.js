import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sheet from "./components/Sheet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init("jb78xmn6");

const SignupForm = Userfront.build({
  toolId: "nodknk",
});

const LoginForm = Userfront.build({
  toolId: "knkdal",
});

const PasswordResetForm = Userfront.build({
  toolId: "ddakom",
});

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home SignupForm={SignupForm} LoginForm={LoginForm} />
            </Route>
            {/* <Route exact path="/login">
              <Login LoginForm={LoginForm} />
            </Route> */}
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route path="/characters/:id">
              <Sheet />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
