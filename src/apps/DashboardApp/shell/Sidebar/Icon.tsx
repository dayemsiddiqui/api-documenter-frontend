import * as Icons from "../../../../assets/icons";
import React from "react";

export const Icon: React.FC<any> = ({ icon, ...props }) => {
  // @ts-ignore
  const Icon = Icons[icon];
  return <Icon {...props} />;
};
