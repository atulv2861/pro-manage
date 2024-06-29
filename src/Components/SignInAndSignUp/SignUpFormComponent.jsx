import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from "../SignInAndSignUp/SignUpFormComponent.module.css";
import profile from "../../assets/images/Profile.png";
import email from "../../assets/images/email.png";
import lock from "../../assets/images/lock.png";
import view from "../../assets/images/view.png";
export default function SignUpFormComponent() {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/login');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className={Style.SignUpForm}>
            <h1>Register</h1>
            {/* <div>
                <div><input type="text" /></div>
                <div><input type='email' /></div>
                <div><input type='password' /></div>
                <div><input type='password' /></div>
            </div> */}
            <div className={Style.Container}>
                <div className={Style.InputContainer}><img src={profile} alt="" /><input className={Style.InputBox} type='text' placeholder="Name" /></div>
                <div className={Style.InputContainer}><img style={{ paddingLeft: '7px' }} src={email} alt="" /><input className={Style.InputBox} style={{ paddingLeft: '10px' }} type='text' placeholder="Email" /></div>
                <div className={Style.InputContainer}><img src={lock} alt="" /><input className={Style.InputBox} type='password' placeholder="Password" /><img src={view} alt='' /></div>
                <div className={Style.InputContainer}><img src={lock} alt="" /><input className={Style.InputBox} type='password' placeholder="Confirm Password" /><img src={view} alt='' /></div>
            </div>
            <button className={Style.Button} onClick={handleRegister}>Register</button>
            <p>Have an account?</p>
            <button className={Style.Btn} onClick={handleLogin}>Login</button>

        </div>
    )
}