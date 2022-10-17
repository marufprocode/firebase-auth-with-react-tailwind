import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";


const { createContext } = require("react");
const auth = getAuth(app);

export const authContext = createContext();

const UserContext = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const [error, setError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const createNewUser = (email, password) => {
        setRegisterSuccess(false);
        setError(null);
        return (createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setRegisterSuccess(true);
            console.log(user);
          })
          .catch((error) => {
            // const errorMessage = error.message;
            setError(error);
            console.error('error', error);
          })
        ) ;
  };

  const updateUserProfile = (name) => {
    return (
      updateProfile(auth.currentUser, {displayName: name})
        
    )
  };

  const userSignIn = (email, password) => {
    return (signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user-signin done', user)
        // ...
        })
        .catch((error) => {
            console.error('error', error);
        })
    );

  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      console.error('error', error);
    });
  

  }

  const handleSignOut = () => {
    return (
      signOut(auth).then(() => {
        console.log('Sign Out Successfull');
      }).catch((error) => {
        console.error('error', error);
      })
    );
  }

  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => setUserProfile(user));
      return () => {
        unsubscribe();
      }
  },[])

  const authInfo = { userProfile, error, createNewUser, updateUserProfile, userSignIn, registerSuccess, handleSignOut, handleGoogleSignIn};
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default UserContext;
