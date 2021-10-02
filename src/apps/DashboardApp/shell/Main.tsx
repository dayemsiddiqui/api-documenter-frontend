import React from "react";

const Main: React.FC<{}> = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  );
};

export default Main;
