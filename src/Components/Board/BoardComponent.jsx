import React, { useState } from "react";
import Style from "../Board/BoardComponent.module.css";
import save from "../../assets/images/save.png"
import CreateTodoComponent from "../Todo/CreateTodoComponent";
import CardComponent from "../Card/CardComponent";
export default function BoardComponent() {
    const [createTodoPopupOpen, setCreateTodoPopupOpen]=useState(false);

    const handleCreateTodo=()=>{
        setCreateTodoPopupOpen(true);
    }

    
    return (<>
    {createTodoPopupOpen&&<CreateTodoComponent setCreateTodoPopupOpen={setCreateTodoPopupOpen}/>}
        <div className={Style.Container}>
            <div className={Style.BoardSection}>
                <div className={Style.Header}>
                    <div>Backlog</div>
                    <div><img src={save} alt="icon" /></div>
                </div>
                <div className={Style.CardContainer}>
                    <CardComponent currentState={`Backlog`}/>
                
                </div>
            </div>
            <div className={Style.BoardSection}>
                <div className={Style.Header}>
                    <div>To Do</div>
                    <div><span onClick={handleCreateTodo} style={{fontSize:"24px", cursor:"pointer"}}>+&nbsp;&nbsp;</span><img src={save} alt="icon" /></div>
                </div>
                <div className={Style.CardContainer}>
                    <CardComponent currentState={`Todo`}/>                
                </div>
            </div>
            <div className={Style.BoardSection}>
                <div className={Style.Header}>
                    <div>In Progress</div>
                    <div><img src={save} alt="icon" /></div>
                </div>
                <div className={Style.CardContainer}>
                    <CardComponent currentState={`InProgress`}/>                
                </div>
            </div>
            <div className={Style.BoardSection}>
                <div className={Style.Header}>
                    <div>Done</div>
                    <div><img src={save} alt="icon" /></div>
                </div>
                <div className={Style.CardContainer}>
                    <CardComponent currentState={`Done`}/>
                
                </div>
            </div>
        </div>
        </>
    )
}