import React from "react";
import routes from "../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubmenu";
import { SidebarMenu } from "./SidebarMenu";

export const SidebarContent: React.FC<{}> = () => {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-purple-700 dark:text-white"
        href="#"
      >
        Smart Youtuber
      </a>
      <ul className="mt-6">
        {routes.map((route, index) => (
          <SidebarMenu key={route.name} route={route} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContent;
