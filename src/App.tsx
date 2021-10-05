import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./lib/components/AccessibleNavigationAnnouncer";
import { Auth } from "./Authentication/state/Auth";
import LandingPage from "./apps/LandingPageApp/LandingPage";
import { MainApp } from "./apps/MainApp/MainApp";
import { JoinRoomPage } from "./apps/MainApp/JoinRoomPage";
import { CreateRoomPage } from "./apps/MainApp/CreateRoomPage";

function App() {
  return (
    <>
      <Auth>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/app" component={MainApp} />
            <Route path="/joinRoom" component={JoinRoomPage} />
            <Route path="/createRoom" component={CreateRoomPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default App;
