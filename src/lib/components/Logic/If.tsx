import React, { useState } from "react";
import { useEffect } from "react";

interface Props {
  condition: boolean;
  children: JSX.Element | Array<JSX.Element> | any;
}

export const THEN = (props: any) => {
  return <>{props.children}</>;
};

export const ELSE = (props: any) => {
  return <>{props.children}</>;
};

export const IF = (props: Props) => {
  const { condition } = props;
  const [child, setChild] = useState(props.children);

  useEffect(() => {
    setChild(props.children);
  }, [props.condition, props.children]);

  const renderChildern = (
    props: Props,
    type: string
  ): JSX.Element | Array<JSX.Element> | null => {
    if (React.Children.count(child) === 1) {
      if (child.type.name === type) {
        return child;
      } else {
        return null;
      }
    } else if (React.Children.count(child) > 1) {
      return props.children.map((_child: JSX.Element) => {
        if (_child.type.name === type) {
          return _child;
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  const renderIF = () => {
    let render = null;
    if (condition) {
      render = renderChildern(props, "THEN");
    } else {
      render = renderChildern(props, "ELSE");
    }
    return render;
  };

  return <>{renderIF()}</>;
};

export default React.memo(IF);
