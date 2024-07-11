import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../Authprovider/Authprovider";


const Login = () => {
    const { loginUser } = useContext(authProvider);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const currentemail = useRef(null);


    const handleLogin = e => {
        e.preventDefault()
        setSuccess('');
        setError("");
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;

        loginUser(userEmail, userPassword)
            .then((result) => {
                setSuccess("login SuccessFully!")
                e.target.reset();
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
                setError("something wrong!")
            })
    }

    const handleForgetPassword = ()=>{
        const currentEmail = currentemail.current.value
        setSuccess('');
        setError("");
        if(currentEmail.length<=0){
            setError("Email field is empty")
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentEmail)){
            setError("Enter a valid email");
            return;
        }
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" ref={currentemail} name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="text-sm">
                                {
                                    success?<p className="text-green-600">{success}</p>:<p className="text-red-600">{error}</p>
                                }
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New? <Link to={"/register"} className="btn btn-link">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;