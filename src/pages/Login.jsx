import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const [error , seterror]= useState("");
    const location = useLocation();
 
    const navigate = useNavigate();
    const formRef = useRef();
    const { signInUser, setuser } = useContext(AuthContext);


    const submithandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       
        signInUser(email, password)
            .then((user) => {
                setuser(user.user);
                formRef.current.reset();
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                
                seterror(err.code)
                

            })
        



    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10 ">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form ref={formRef} onSubmit={submithandle} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {error && <p>{error}</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p>Dont have an Account?<Link to="/auth/register"> SignUp Here</Link></p>
            </div>
        </div>
    )
}

export default Login
