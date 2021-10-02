import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../Overview/view/Dashboard"));
const Overview = lazy(() => import("../Overview/view/OverviewPage"));
const ConnectToYoutube = lazy(
  () => import("../Overview/view/ConnectYoutubeAccount")
);
const VideoPage = lazy(() => import("../VideosPage/view/VideosPage"));
const Spam = lazy(() => import("../Insights/view/Spam"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `shell/DashboardApp`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.ts`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/overview", // the url
    component: Overview, // view rendered
  },
  {
    path: "/connect", // the url
    component: ConnectToYoutube, // view rendered
  },
  {
    path: "/videos",
    component: VideoPage,
  },
  {
    path: "/spam",
    component: Spam,
  },
];

export default routes;
