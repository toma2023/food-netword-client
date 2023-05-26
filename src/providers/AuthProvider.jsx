import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';




export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [chefAllData, setChefAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // All data of recipe
    useEffect(() => {
        fetch('https://food-network-server-toma570.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setChefAllData(data))
            .catch(error => console.error(error))
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
  // update user profile 
  const updateUser = (fullName, userPhoto) => {
    return updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: userPhoto,
    });
}


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
          
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const signInGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }

    const signInGithub = () => {
        return signInWithPopup(auth, githubProvider)

    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        chefAllData,
        loading,
        auth,
        signInGoogle,
        signInGithub,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;