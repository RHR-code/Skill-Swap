import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const resetPassUser = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateUser = (profileObj) => {
    return updateProfile(auth.currentUser, profileObj);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("signed out");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);

  const allData = {
    user,
    setUser,
    signupUser,
    loginUser,
    logoutUser,
    resetPassUser,
    updateUser,
    googleLogin,
  };
  return <AuthContext value={allData}>{children}</AuthContext>;
};

export default AuthProvider;
