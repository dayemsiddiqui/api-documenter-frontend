import React from "react";
import classNames from "classnames";

export const PageDialogButton: React.FC<{
  onClick: () => any;
  className?: string;
  isLoading?: boolean;
}> = ({ onClick, className, isLoading = false, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "py-2 my-6 px-3 w-auto right-0 text-sm block md:inline-block disabled:opacity-50 disabled:text-gray-50 disabled:bg-gray-400",
        className
      )}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex justify-center items-center px-0">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 mx-2 px-0 border-white" />
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
