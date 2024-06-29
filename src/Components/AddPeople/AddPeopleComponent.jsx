import React, { useState } from "react";
import Style from "../AddPeople/AddPeopleComponent.module.css";
import AddEmailConfirmationPopup from "./AddEmailConfirmationPopup";

export default function AddPeopleComponent({setIsAddPeoplePopupOpen}){
    const [isAddEmailConfirmationPopupOpen,setIsAddEmailConfirmationPopupOpen]=useState(false);
    const handleCancelAddPeople=()=>{
        setIsAddPeoplePopupOpen(false);
    }

    const handleAddEmail=()=>{
        setIsAddEmailConfirmationPopupOpen(true);
        
    }

    return(
        <div className={Style.Container}>
            {isAddEmailConfirmationPopupOpen&&<AddEmailConfirmationPopup
            setIsAddEmailConfirmationPopupOpen={setIsAddEmailConfirmationPopupOpen}
            setIsAddPeoplePopupOpen={setIsAddPeoplePopupOpen}/>}
            <div style={{fontSize:'20px', fontWeight:'400', marginBottom:'7px'}}>Add people to the board</div>
            <div><input className={Style.Inputbox} placeholder='Enter the email' type="text"/></div>
            <div className={Style.Btn}>
                <button className={Style.Button} style={{border:'2px solid red',color:'red', fontWeight:'400', backgroundColor:'#fff'}} onClick={handleCancelAddPeople}>Cancel</button>
                <button className={Style.Button} style={{border:'none',color:'#fff', fontWeight:'400', backgroundColor:'#17A2B8'}} onClick={handleAddEmail}>Add Email</button>
            </div>
        </div>
    )
}