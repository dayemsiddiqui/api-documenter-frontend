import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "./routes";

import Sidebar from "./shell/Sidebar";
import Header from "./shell/Header";
import Main from "./shell/Main";
import ThemedSuspense from "../../lib/components/ThemedSuspense";
import { SidebarContext } from "./context/SidebarContext";
import { useTitle } from "../../hooks/useTitle";

const Page404 = lazy(() => import("../../lib/pages/404"));

function DashboardApp() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useTitle("Smart Youtuber | Dashboard");

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component />}
                  />
                ) : null;
              })}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default DashboardApp;
