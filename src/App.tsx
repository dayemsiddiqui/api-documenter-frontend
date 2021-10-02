import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./lib/components/AccessibleNavigationAnnouncer";
import { Auth } from "./Authentication/state/Auth";
import { PrivateRoute } from "./Authentication";
import LandingPage from "./apps/LandingPageApp/LandingPage";

const DashboardApp = lazy(() => import("./apps/DashboardApp/DashboardApp"));

function App() {
  return (
    <>
      <Auth>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <PrivateRoute path="/app" component={DashboardApp} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default App;
