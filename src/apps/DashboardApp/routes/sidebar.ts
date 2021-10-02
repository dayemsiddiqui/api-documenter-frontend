/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.tsx`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.tsx
    name: "Dashboard", // name that appear in Sidebar
    exact: false,
  },
  {
    path: "/app/videos",
    icon: "VideoCamera",
    name: "My Videos",
    exact: false,
  },
  {
    path: "/app/spam",
    icon: "ChartsIcon",
    name: "Spam",
    exact: false,
  },
];

export default routes;
