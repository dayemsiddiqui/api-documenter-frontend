import React, { useState, useMemo } from "react";

// create context
export const SidebarContext = React.createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export const SidebarProvider: React.FC<{}> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
