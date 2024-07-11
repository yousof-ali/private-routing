import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/Firebase/firebase.config";
import { GoogleAuthProvider,signInWithPopup,GithubAuthProvider, } from "firebase/auth";

export const authProvider = createContext()


const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loder,setLoader]=useState(true);

    const googoleprovider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider

    const registerUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser);
            setLoader(false);
        })
        return unSubcribe
    },[])
    
    const LoginWithGoogle=()=>{
        return signInWithPopup(auth,googoleprovider);
    }

    const LoginWithGitHub=()=>{
        return signInWithPopup(auth,gitHubProvider);
    }

    const values = {user,registerUser,loginUser,logOut,loder,LoginWithGoogle,LoginWithGitHub}
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default Authprovider;