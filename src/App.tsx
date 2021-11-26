import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./lib/components/AccessibleNavigationAnnouncer";
import { Auth } from "./Authentication/state/Auth";
import LandingPage from "./apps/LandingPageApp/LandingPage";
import { APIDashboard } from "./apps/MainApp/view/APIDashboard";
import { APIDocumentViewer } from "./apps/MainApp/view/APIDocumentViewer";

function App() {
  return (
    <>
      <Auth>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/render/:id" component={APIDocumentViewer} />
            <Route path="/dashboard" component={APIDashboard} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default App;
