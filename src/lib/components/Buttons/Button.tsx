import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="py-2 px-3 w-auto text-sm text-white rounded-md bg-brand-green shadow-md block md:inline-block active:bg-brand-green-light hover:bg-brand-green-dark focus:outline-none focus:shadow-outline-green"
    >
      {children}
    </button>
  );
};
