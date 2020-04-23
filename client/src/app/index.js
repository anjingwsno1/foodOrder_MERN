import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "../components";
import Home from "../pages/home";
import Cake from "../pages/cake";
import CakeDetail from "../pages/cakeDetail";
import Price from "../pages/price";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cakes" exact component={Cake} />
        <Route path="/cakeDetail/:id" exact component={CakeDetail} />
        <Route path="/prices" exact component={Price} />
      </Switch>
    </Router>
  );
}

export default App;
