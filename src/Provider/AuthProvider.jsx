import { createContext, useEffect, useState } from "react"
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import auth from "../FireBase.config";


export  const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setuser]=useState(null);
    const [loading , setloading]= useState(true);
    
    
   //Newuser Registration
    const signupnewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login exsiting user
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // Logout
    const logOut=()=>{
        return signOut(auth)
        .then(()=>{console.log("log out successfull")
            setloading(true)
        })
        .catch(error=>{console.log(error)})
    }
    // Onauthchange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
            setloading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    // update profile
    const updateprofile =(updatedata)=>{
        return updateProfile(auth.currentUser,updatedata);
    }

    // shared by COntex api
    const userInfo ={
        signupnewUser,signInUser,setuser,user,logOut,loading,updateprofile
    }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
