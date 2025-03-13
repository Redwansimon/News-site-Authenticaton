import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto p-14">
        <h2>AUTHLAYOUT</h2>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout
