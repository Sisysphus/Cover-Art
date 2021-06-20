import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import TextArea from "./components/TextArea";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <Switch>
        <Route path="/Philosophers" exact />
      </Switch>
      <Router>
        <Switch>
          <Route path="/About" exact />
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route path="/About" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
