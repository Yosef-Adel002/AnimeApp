import React from 'react'
import Login from '../Login'
import Signup from './../Signup';
import { useState } from 'react';
import Layout from '../Layout';



const Loginpage = () => {

    const [haveAcount,setHaveAcount]=useState(false);
    const signinHandeler= ()=>{
        setHaveAcount(true)
    }
    const signupHandeler = ()=>{
        setHaveAcount(false)
    }
    return (
        <div className="gg">
        <div className="form " >
           {haveAcount&&<Login signupHandeler={signupHandeler}/>}
           {!haveAcount&&<Signup signinHandeler={signinHandeler}/>}
        </div>
        </div>
    )
}

export default Loginpage
