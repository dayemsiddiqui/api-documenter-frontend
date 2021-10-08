import React, { useState, Children } from "react";

/**
 * Reference: https://github.com/hodev-dev/react-logic-components/blob/master/src/Logics/Switch.tsx
 */

interface Props {
  variable: any;
  children: JSX.Element | Array<JSX.Element> | any;
}

export const Case = (props: any) => {
  return <>{props.children}</>;
};

export const Default = (props: any) => {
  return <>{props.children}</>;
};

export const Switch = (props: Props) => {
  const { variable, children } = props;

  const renderCase = () => {
    var counter = 0;
    return props.children.map((child: any) => {
      if (child.props.check === variable) {
        counter++;
        return child;
      } else {
        if (
          child.props.check !== variable &&
          child.type.name === "Default" &&
          counter === 0
        ) {
          return child;
        } else {
          return null;
        }
      }
    });
  };

  return <>{renderCase()}</>;
};
