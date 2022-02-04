import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const SneakerPage = () => (
  <div>
    <h1>Sneaker page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/sneakers" component={SneakerPage} />
      </Switch>
    </div>
  );
}

export default App;
