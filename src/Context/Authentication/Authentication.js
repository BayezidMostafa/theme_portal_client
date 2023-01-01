import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.cofig';

const auth = getAuth(app);
export const AuthContext = createContext();

const Authentication = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuth = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userSignOut = () => {
        setLoading(true)
        localStorage.removeItem('theme-token')
        return signOut(auth);
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
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
    }

    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;