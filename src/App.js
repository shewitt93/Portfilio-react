import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./containers/HomePage";
import Skills from "./containers/Skills";
import Projects from "./Components/Projects";
// import { NavLink } from "react-router-dom";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <main className="Portfolio">
          <header>
            <h1>PEYMAN SIMON HEWITT - PORTFOLIO</h1>
            <h3>Junior full stack developer</h3>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Skills" component={Skills} />

            <Route path="/Projects" component={Projects} />
            {/* <Route path="/Projects/id" Component={Project} /> */}
          </Switch>
          <footer>Links</footer>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
