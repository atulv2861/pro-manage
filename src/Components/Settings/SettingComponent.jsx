import React from "react";
import Style from "../Settings/SettingComponent.module.css";
import profile from "../../assets/images/Profile.png";
import email from "../../assets/images/email.png";
import lock from "../../assets/images/lock.png";
import view from "../../assets/images/view.png";
export default function SettingComponent(){

    return(
        <div className={Style.Container}>
            <div className={Style.InputContainer}><img src={profile} alt=""/><input className={Style.InputBox} type='text' placeholder="Name"/></div>
            <div className={Style.InputContainer}><img style={{paddingLeft:'7px'}} src={email} alt=""/><input className={Style.InputBox} style={{paddingLeft:'10px'}} type='text' placeholder="Update Email"/></div>
            <div className={Style.InputContainer}><img src={lock} alt=""/><input className={Style.InputBox} type='password' placeholder="Old Password"/><img src={view} alt=''/></div>
            <div className={Style.InputContainer}><img src={lock} alt=""/><input className={Style.InputBox} type='password' placeholder="New Password"/><img src={view} alt=''/></div>
            <div><button className={Style.Button}>Update</button></div>
        </div>
    )
}