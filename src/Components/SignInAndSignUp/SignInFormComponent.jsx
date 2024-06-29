import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from "../SignInAndSignUp/SignInFormComponent.module.css"
import email from "../../assets/images/email.png";
import lock from "../../assets/images/lock.png";
import view from "../../assets/images/view.png";
export default function SignInFormComponent() {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        navigate('/dashboard');
    }
    return (
        <div className={Style.SignInForm}>
            <h1>Login</h1>
            <div className={Style.Container}>
                <div className={Style.InputContainer}><img style={{ paddingLeft: '7px' }} src={email} alt="" /><input className={Style.InputBox} style={{ paddingLeft: '10px' }} type='text' placeholder="Email" /></div>
                <div className={Style.InputContainer}><img src={lock} alt="" /><input className={Style.InputBox} type='password' placeholder="Password" /><img src={view} alt='' /></div>
            </div>
            <button className={Style.Button} onClick={handleLogin}>Log In</button>
            <p>Have no account yet?</p>
            <button className={Style.Btn} onClick={handleRegister}>Register</button>
        </div>
    )
}