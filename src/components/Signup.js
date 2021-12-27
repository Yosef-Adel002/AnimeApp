import React from 'react'
import "./Form.css"
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
const auth = getAuth();
const Signup = (props) => {
    const history = useHistory();
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const SignupHandeler =(e)=>{
        e.preventDefault();
        setEmailError('')
        setPasswordError('')
        createUserWithEmailAndPassword(auth, email,password)
        .catch(err =>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
        const user = auth.currentUser;

        if(user) {
            history.push("/Home")
           
        }

        updateProfile(auth.currentUser, {
            displayName: "username", 
          })
    }

    return (
        <div>
            
            <form className="signup-form" >

                <input className="user-input" type="text" name="" placeholder="Username" required value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
				<input className="user-input" type="email" name="" placeholder="Email Address" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                {emailError&& <p className="error"> {emailError}</p>}
				<input className="user-input" type="password" name="" placeholder="Password" required  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                {passwordError&& <p className="error"> {passwordError}</p>}
                <input className="btn" type="submit" name="" value="SIGN UP" onClick={SignupHandeler}/>
				<div className="options-02">
				<p>Already Registered? <a  onClick={props.signinHandeler}>Sign In</a></p>
				</div>
            </form>
        </div>
    )
}

export default Signup
