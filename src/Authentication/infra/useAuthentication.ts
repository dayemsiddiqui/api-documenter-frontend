import firebase from "./base";

export type ThirdPartyAuthProvider =
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.GithubAuthProvider
  | firebase.auth.FacebookAuthProvider;

export const useAuthentication = (provider: ThirdPartyAuthProvider) => {
  const signIn = async (): Promise<firebase.User | null> => {
    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
      return user;
    } catch (err) {
      console.log("Error Login", err);
      return null;
    }
  };

  const signOut = async () => {
    await firebase.auth().signOut();
  };

  return {
    signIn,
    signOut,
  };
};
