import { createUserWithEmailAndPassword,onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/Firebase/firebase.config";

export const authProvider = createContext()

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loder,setLoader]=useState(true);

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
    
    

    const values = {user,registerUser,loginUser,logOut,loder}
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default Authprovider;