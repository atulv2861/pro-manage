import React from "react";
import Style from "../Task/TaskComponent.module.css";

export default function TaskComponent() {

    return (
        <div className={Style.Card}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className={Style.Circel}></div>
                <div style={{ marginLeft: '10px', fontSize: '12px' }}>HIGH PRIORITY</div>
            </div>
            <div style={{ margin: '10px 10px', fontSize: 'large', fontWeight: 'bold' }}>
                Hero Section
            </div>
            <div style={{fontSize:'18px', fontWeight:'450', marginLeft:'10px'}}>
                Checklist(1/3)
            </div>
            <div>
                <div className={Style.TaskItem}>
                    <input type='checkbox' style={{ marginLeft: '10px' }} readOnly />
                    <input type='text' placeholder='Task to be done' readOnly className={Style.TaskInput} />
                </div>
                <div className={Style.TaskItem}>
                    <input type='checkbox' style={{ marginLeft: '10px' }} readOnly />
                    <input type='text' placeholder='Task to be done' readOnly className={Style.TaskInput} />
                </div>
                <div className={Style.TaskItem}>
                    <input type='checkbox' style={{ marginLeft: '10px' }} readOnly />
                    <input type='text' placeholder='Task to be done' readOnly className={Style.TaskInput} />
                </div>
            </div>
            <div className={Style.Duedate}>
                <div style={{fontSize:'18px', fontWeight:'450', marginLeft:'10px'}}>Due Date</div>
                <div className={Style.Date}>10th Feb</div>
            </div>
        </div>
    )
}