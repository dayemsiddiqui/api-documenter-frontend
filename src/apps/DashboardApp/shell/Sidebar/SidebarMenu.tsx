import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

const sidebarMenuButton = {
  hidden: {
    translateX: 1,
  },
  visible: {
    translateX: "12%",
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const SidebarMenu: React.FC<{
  route: {
    path: string;
    icon: any;
    exact: boolean;
    name: string;
  };
  index: number;
}> = ({ route, index }) => {
  const COLORS = [
    "bg-brand-red",
    "bg-brand-blue",
    "bg-brand-green",
    "bg-brand-yellow",
  ];
  const selectedColor = COLORS[index % COLORS.length];
  console.log("SelectedColor", selectedColor, COLORS.length % 4, COLORS.length);
  return (
    <motion.li
      whileHover="visible"
      variants={sidebarMenuButton}
      className={`relative px-6 py-2 hover:${selectedColor} hover:text-white  shadow`}
    >
      <div>
        <NavLink
          exact
          to={route.path}
          className="inline-flex items-center w-full  py-2 text-sm font-semibold transition-colors duration-150 hover:text-white"
          activeClassName="text-gray-800 dark:text-gray-100"
        >
          <Route path={route.path} exact={route.exact}>
            <span
              className={`absolute inset-y-0 left-0 w-2 ${selectedColor}  `}
              aria-hidden="true"
            />
          </Route>
          <Icon className="w-5 h-5 " aria-hidden="true" icon={route.icon} />
          <span className="ml-4">{route.name}</span>
        </NavLink>
      </div>
    </motion.li>
  );
};
