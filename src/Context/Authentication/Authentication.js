import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.cofig';

const auth = getAuth(app);
export const AuthContext = createContext();

const Authentication = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const googleAuth = new GoogleAuthProvider()
    const githubAuth = new GithubAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userSignOut = () => {
        return signOut(auth);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuth);
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubAuth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const info = {
        user,
        loading,
        setLoading,
        createUser,
        updateUser,
        userSignIn,
        userSignOut,
        googleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;