import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, NavLink, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


const Privateroute = ({children}) => {
    const location = useLocation();
    
    const {user ,loading } = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
}

export default Privateroute
