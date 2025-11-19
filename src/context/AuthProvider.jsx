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
  const [loading, setLoading] = useState(true);
  const signupUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    setLoading(false);
    return signOut(auth);
  };
  const resetPassUser = (email) => {
    setLoading(false);
    return sendPasswordResetEmail(auth, email);
  };
  const updateUser = (profileObj) => {
    setLoading(false);
    return updateProfile(auth.currentUser, profileObj);
  };
  const googleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const allData = {
    user,
    setUser,
    signupUser,
    loginUser,
    logoutUser,
    resetPassUser,
    updateUser,
    googleLogin,
    loading,
    setLoading,
  };
  return <AuthContext value={allData}>{children}</AuthContext>;
};

export default AuthProvider;
