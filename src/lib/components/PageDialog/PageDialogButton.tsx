import React from "react";
import classNames from "classnames";

export const PageDialogButton: React.FC<{
  onClick: () => any;
  className?: string;
}> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "py-2 my-6 px-3 w-auto right-0 text-sm block md:inline-block",
        className
      )}
    >
      {children}
    </button>
  );
};
