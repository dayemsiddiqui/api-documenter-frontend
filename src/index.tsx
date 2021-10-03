import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/tailwind.output.css";
import App from "./App";
import { SidebarProvider } from "./apps/DashboardApp/context/SidebarContext";
import ThemedSuspense from "./lib/components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const isDevelopment = process.env.REACT_APP_NODE_ENV === "development";

ReactDOM.render(
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
          {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </Windmill>
    </Suspense>
  </SidebarProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

/**
 * PurgeCSS:
 * text-red-500
 * text-green-500
 * text-yellow-500
 * text-gray-500
 * text-purple-500
 * text-indigo-500
 * text-blue-500
 * text-pink-500
 * text-purple-800

 */
