import { useContext, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [error , seterror]=useState({});

    const { signupnewUser,setuser,updateprofile } = useContext(AuthContext);
    const navigate = useNavigate();

    const submithandle = (e) => {
        
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get("name");
        if(name.length<5){
            seterror({...error, name : "the name must be in 6 character"})
            return
        }
        const photoURL = form.get("photoURL")
        const password = form.get("password")
        const email = form.get("email")
        signupnewUser(email, password)
            .then((user) => {
                setuser(user.user);
                updateprofile({displayName:name , photoURL:photoURL})
                .then(()=>{
                    navigate("/")
                    
                })
                .catch(error=>console.log(error))
                
            })
            .catch((error) => {
                console.log("ERRORRRRR", error)
            })

    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10 ">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={submithandle} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    {error.name && (<label className="label">
                            <span className="label-text">{error.name}</span>
                        </label>)}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="PhotoURL" className="input input-bordered" required />
                    </div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p>Already have an Account?<Link to="/auth/login"> Login Here</Link></p>

            </div>
        </div>
    )
}

export default Register
