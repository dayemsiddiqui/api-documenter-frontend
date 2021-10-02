import React from "react";

export const ApplicationHero: React.FC<{
  title: string;
  description: string;
}> = ({ title, description, children }) => (
  <>
    <div className="py-16 mx-auto">
      <div className="flex flex-col gap-8 justify-center text-center">
        <h1 className="text-5xl text-center dark:text-white">{title}</h1>
        <p className="text-xl text-center mx-32 dark:text-white">
          {description}
        </p>
        {children}
      </div>
    </div>
  </>
);
