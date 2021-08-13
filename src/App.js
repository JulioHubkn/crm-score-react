import logo from "./logo.svg";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    M.AutoInit();
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" />
      </Switch>
    </BrowserRouter>
  );
}

const fetchHubspotData = () => {
  document.querySelector("#first-form");
};

export default App;
