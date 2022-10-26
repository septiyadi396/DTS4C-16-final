import { React, createContext, useContext, useEffect, useState } from 'react';
import {auth} from './../utils/firebase/base';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    async function register(email, password) {
        const userSignUp = await createUserWithEmailAndPassword(auth, email, password);
        console.log('user sign up', userSignUp);
        return userSignUp
        // try {
        // } catch (error) {
        //     console.log('error sign up',error);
        // }
        // setDoc(doc(db, 'users', email), {
        //     savedShows: []
        // })
    }

    async function logIn(email, password) {
        const userSignIn = await signInWithEmailAndPassword(auth, email, password);
        console.log('user sign in',userSignIn);
        return userSignIn
        // try {
        // } catch (error) {
        //     console.log('error sign in',error);
        // }
    }

    async function logOut() {
        return signOut(auth);
        // try {
        // } catch (error) {
        //     console.log('error log out',error);
        // }
    }

    useEffect(() => {
        const userState = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => userState()
    });

    return (
        <AuthContext.Provider value={{ register, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}