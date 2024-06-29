import React from "react";
import Style from "../Delete/DeleteConfirmationPopup.module.css";

export default function DeleteConfirmationPopup({setIsOpenDeletePopup}){

    const handleCancelDeletePopup=()=>{
        setIsOpenDeletePopup(false);
    }
    return(
        <div className={Style.Container}>
            <div style={{marginBottom:'20px'}}>Are you sure you want to Delete?</div>
            <div><button style={{marginBottom:'10px', color:'#fff', backgroundColor:'#17A2B8'}} className={Style.Btn}>Yes, Delete</button></div>
            <div><button onClick={handleCancelDeletePopup} style={{marginBottom:'10px', color:'red', backgroundColor:'#fff', border:'2px solid red'}} className={Style.Btn}>Cancel</button></div>
        </div>
    )
}