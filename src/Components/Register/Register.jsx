import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../Authprovider/Authprovider";
import { updateProfile } from "firebase/auth";



const Register = () => {
    
    const {registerUser}=useContext(authProvider);
    const [error,setError]=useState('');
    const navigate = useNavigate();
    

    const handleRegister = e =>{
        e.preventDefault()
        setError("")
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;

        registerUser(userEmail,userPassword)
        .then(result=>{
            console.log(result.user);
            updateProfile(result.user,{
                displayName:userName
            })
            .then(()=>{

            })
            .catch(()=>{
                setError("something wrong!");
            })
            navigate("/");
        })
        .catch((error)=>{
            console.log(error.message);
            setError("Try another Email !")
        })

       
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            {
                                error&&<p className="text-red-600 text-sm mt-4">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p>Have account? <Link to={"/login"} className="btn btn-link">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;