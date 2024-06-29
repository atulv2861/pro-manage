import React from "react";
import Style from "../Logout/LogoutPopup.module.css";
import { useNavigate } from "react-router-dom";
export default function LogoutPopup({setIsLogoutConfirmationPopupOpen}){
    const navigate=useNavigate();
    const handleCancelLogoutPopup=()=>{
        setIsLogoutConfirmationPopupOpen(false);
    }

    const handleLogoutPopup=()=>{
        setIsLogoutConfirmationPopupOpen(false);
        navigate('/');
    }
    return(
        <div className={Style.Container}>
            <div style={{marginBottom:'20px'}}>Are you sure you want to Logout?</div>
            <div><button onClick={handleLogoutPopup} style={{marginBottom:'10px', color:'#fff', backgroundColor:'#17A2B8'}} className={Style.Btn}>Yes, Logout</button></div>
            <div><button onClick={handleCancelLogoutPopup} style={{marginBottom:'10px', color:'red', backgroundColor:'#fff', border:'2px solid red'}} className={Style.Btn}>Cancel</button></div>
        </div>
    )
}