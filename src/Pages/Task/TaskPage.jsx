import React from 'react';
import Style from "../Task/TaskPage.module.css";
import proManage from "../../assets/images/codesandbox.png";
import TaskComponent from '../../Components/Task/TaskComponent';
export default function TaskPage(){

    return(<>
    <div className={Style.Navbar}><span><img style={{marginBottom:'-5px', marginRight:'5px'}} src={proManage} alt=""/></span>Pro Manage</div>
    <div className={Style.Container}>
        <TaskComponent/>
    </div>
    </>)
}