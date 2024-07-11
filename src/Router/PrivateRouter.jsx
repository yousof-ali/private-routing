import { useContext } from 'react';
import { authProvider } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {loder,user}=useContext(authProvider)
    if(loder){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRouter;