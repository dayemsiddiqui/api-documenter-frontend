import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./lib/components/AccessibleNavigationAnnouncer";
import { Auth } from "./Authentication/state/Auth";
import LandingPage from "./apps/LandingPageApp/LandingPage";
import { Room } from "./apps/MainApp/view/Room";
import { JoinRoomPage } from "./apps/MainApp/view/JoinRoomPage";
import { CreateRoomPage } from "./apps/MainApp/view/CreateRoomPage";

function App() {
  return (
    <>
      <Auth>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/room/:roomID" component={Room} />
            <Route path="/joinRoom/:roomID" component={JoinRoomPage} />
            <Route path="/createRoom" component={CreateRoomPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default App;
