import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute: React.FC<any> = ({
  component: RouteComponent,
  ...rest
}) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};
