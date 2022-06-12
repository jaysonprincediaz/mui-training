/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import { useState, useEffect } from "react";

import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import FireBase from "./components/FireBase";
import fireBase from "./components/FireBase";

function App() {
  const [user, setUser] = useEffect("");
  const [email, setEmail] = useEffect("");
  const [password, setPassword] = useEffect("");
  const [emailError, setEmailError] = useEffect("");
  const [passwordError, setPasswordError] = useEffect("");
  const [hasAccount, setHasAccount] = useEffect(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignIn = () => {
    clearError();
    FireBase.auth()
      .signInWithEmailAndPassord(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassword(err.message);
            break;
        }
      });
  };
  const handleSignUp = () => {
    clearError();
    FireBase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
        }
      });
  };

  const handleSignOut = () => {
    fireBase.auth().signOut();
  };

  const authListener = () => {
    fireBase.auth().onAuthStatementChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <Navbar />
      <MainRoutes
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
    </div>
  );
}

export default App;
