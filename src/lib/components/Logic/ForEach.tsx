import React, { useEffect } from "react";

interface Props {
  data: any;
  as: string;
  children: JSX.Element | Array<JSX.Element> | any;
}

export const ForEach = (props: Props) => {
  const { data, as, children } = props;
  const renderForEach = () => {
    const obj: any = {};
    return data.map((innerData: any, index: number) => {
      obj[as] = innerData;
      return (
        <React.Fragment key={index}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, obj)
          )}
        </React.Fragment>
      );
    });
  };

  return <>{renderForEach()}</>;
};
