import React from 'react'
import './Form.css'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
const auth = getAuth();
const Login = (props) => {

    const history = useHistory();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')

    const signinHandeler =(e)=>{
        e.preventDefault();
        setPasswordError("")
        setEmailError("")
        signInWithEmailAndPassword(auth, email, password)
        .catch(err =>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message)
                    break;
                
                case "auth/wrong-password":
                    setPasswordError(err.message)
                    break;
            }
        })
    
        const user = auth.currentUser;

        if(user) {
            history.push("/Home")
           
        }
    }

    return (
        <div >
            <form className="login-form" >
          
            <input className="user-input" type ="text" name="" placeholder="Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            {emailError&& <p className="error"> {emailError}</p>}
            <input className="user-input" type ="password" name="" placeholder="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {passwordError&& <p className="error"> {passwordError}</p>}
            <div className="options-01">
                <label className="remember-me"><input type="checkbox" name=""/> Remember me</label>
                <a >Forgot your password?</a>
            </div>
            <input className="btn" type="submit" name="" value="LOGIN" onClick={signinHandeler}></input>
			<div className="options-02">
					<p>Not Registered? <a onClick={props.signupHandeler}>Create an Account</a></p>
				</div>
            </form>

        </div>
    )
}

export default Login
