import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UseInputHooks from "./components/UseInputHooks";
import Home from "./components/Home";
import UseTabHooks from "./components/UseTabHooks";
import UseTitleHooks from "./components/UseTitleHooks";
import UseClickHooks from "./components/UseClickHooks";
import UseConfirmHooks from "./components/UseConfirmHooks";
import UsePreventLeave from "./components/UsePreventLeave";
import UseBeforeLeave from "./components/UseBeforeLeave";
import UseFadeIn from "./components/UseFadeIn";
import UseNetwork from "./components/UseNetwork";
import UseScroll from "./components/UseScroll";
import UseFullscreen from "./components/UseFullscreen";
import UseNotification from "./components/UseNotification";

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
        <li>
          <Link to="/usetitlehooks">UseTitle</Link>
        </li>
        <li>
          <Link to="/useclickhooks">UseClick</Link>
        </li>
        <li>
          <Link to="/useconfirmhooks">UseConfirm</Link>
        </li>
        <li>
          <Link to="/usepreventleave">UsePreventLeave</Link>
        </li>
        <li>
          <Link to="/usebeforeleave">useBeforeLeave</Link>
        </li>
        <li>
          <Link to="/usefadein">useFadeIn</Link>
        </li>
        <li>
          <Link to="/usenetwork">useNetwork</Link>
        </li>
        <li>
          <Link to="/usescroll">useScroll</Link>
        </li>
        <li>
          <Link to="/usefullscreen">useFullscreen</Link>
        </li>
        <li>
          <Link to="/usenotification">useNotification</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/useinputhooks" component={UseInputHooks} />
        <Route exact path="/usetabhooks" component={UseTabHooks} />
        <Route exact path="/usetitlehooks" component={UseTitleHooks} />
        <Route exact path="/useclickhooks" component={UseClickHooks} />
        <Route exact path="/useconfirmhooks" component={UseConfirmHooks} />
        <Route exact path="/usepreventleave" component={UsePreventLeave} />
        <Route exact path="/usebeforeleave" component={UseBeforeLeave} />
        <Route exact path="/usefadein" component={UseFadeIn} />
        <Route exact path="/usenetwork" component={UseNetwork} />
        <Route exact path="/usescroll" component={UseScroll} />
        <Route exact path="/usefullscreen" component={UseFullscreen} />
        <Route exact path="/usenotification" component={UseNotification} />
      </Switch>
    </div>
  );
};

export default App;
