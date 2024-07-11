import { createContext, useState } from "react";

export const authProvider = createContext()

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);

    const values = {name:"yousof ali"}
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default Authprovider;