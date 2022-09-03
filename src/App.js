import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContainerBook from "./containers/ContainerBook";
import ContainerSearch from "./containers/ContainerSearch";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ ContainerBook } />
        <Route path="/search" component={ ContainerSearch } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
