import { useContext } from "react";
import { authProvider } from "../../Authprovider/Authprovider";


const Profile = () => {
    const{user}=useContext(authProvider);
    return (
        <div>
            <h2 className="text-3xl text-center">This is Your Profile</h2>
            <h2 className="text-3xl text-center">Name:{user.displayName}</h2>
        </div>
    );
};

export default Profile;