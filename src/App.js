import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UseInputHooks from "./components/UseInputHooks";
import Home from "./components/Home";
import UseTabHooks from "./components/UseTabHooks";

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/useinputhooks">UseInput</Link>
        </li>
        <li>
          <Link to="/usetabhooks">UseTab</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/useinputhooks" component={UseInputHooks} />
        <Route exact path="/usetabhooks" component={UseTabHooks} />
      </Switch>
    </div>
  );
};

export default App;
