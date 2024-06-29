import React from "react";
import Style from '../AddPeople/AddEmailConfirmationPopup.module.css';

export default function AddEmailConfirmationPopup({setIsAddEmailConfirmationPopupOpen,setIsAddPeoplePopupOpen}){

    const handleConfirm=()=>{
        setIsAddEmailConfirmationPopupOpen(false);
        setIsAddPeoplePopupOpen(false);
    }

    return(
        <div className={Style.Container}>
            <div style={{fontSize:'18px', fontWeight:'400', marginBottom:'10px'}}>atulverma2861@gmail.com added to board</div>
            <div><button onClick={handleConfirm} className={Style.Button}>Okey, got it!</button></div>
        </div>
    )
}