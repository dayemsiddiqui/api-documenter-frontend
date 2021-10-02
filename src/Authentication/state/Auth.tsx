import React, { useEffect, useState } from "react";
import app from "../infra/base";
import firebase from "firebase";
import { useAuthentication } from "../infra/useAuthentication";

export const AuthContext = React.createContext<{
  currentUser: null | firebase.User;
}>({
  currentUser: null,
});

export const Auth: React.FC<{}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
