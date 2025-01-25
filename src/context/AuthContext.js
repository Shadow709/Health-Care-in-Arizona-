"use client";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObj, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    setUserData({});
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    const signOut = onAuthStateChanged(auth, async (user) => {
      try {
        // user will be able to acess client
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          retun;
        }

        // if user exists, this will then go to firestore
        console.log("Fetching user data");
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          console.log("Found User Data");
          firebaseData = docSnap.data();
          console.log(firebaseData);
        }
        setUserDataObj(firebaseData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    });
    return signOut;
  }, []);
  const value = {
    currentUser,
    userDataObj,
    signup,
    signout,
    login,
    loading,
  };

  return <AuthContext.Provider value={value}></AuthContext.Provider>;
}
