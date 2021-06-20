import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Philosophers from "./components/pages/Philosophers";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/philosophers" component={Philosophers} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
