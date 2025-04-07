import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
<<<<<<< HEAD
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
=======
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const googleProvider = new GoogleAuthProvider();
=======
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

<<<<<<< HEAD
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

=======
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
<<<<<<< HEAD
      displayName: name,
      photoURL: photo,
    });
  };
=======
      displayName: name, photoURL: photo
    })
  }
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
<<<<<<< HEAD
=======
      console.log("current user", currentUser);
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
<<<<<<< HEAD
    googleSingIn,
    logOut,
    updateUserProfile,
=======
    logOut,
    updateUserProfile
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
