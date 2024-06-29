import React, { useState } from "react";
import Style from "../Card/CardComponent.module.css";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BsThreeDots, BsCashStack } from "react-icons/bs";
import DeleteConfirmationPopup from "../Delete/DeleteConfirmationPopup";
import { toast } from "react-toastify";
import CreateTodoComponent from "../Todo/CreateTodoComponent";
export default function CardComponent({currentState}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdownList,setIsOpenDropdownList]=useState(false);
    const [isOpenDeletePopup,setIsOpenDeletePopup]=useState(false);
    const [isEditTodoOpen,setIsEditTodoOpen]=useState(false);
    const item = ['atulverma2861@gmail.com', 'atulverma2861@gmail.com', 'atulverma2861@gmail.com', 'atulverma2861@gmail.com', 'atulverma2861@gmail.com'];
    const btn=['Backlog','Todo','InProgress','Done'];
    const getTwoCharFromStart = (str) => {
        return str.substring(0, 2).toUpperCase();
    }

    const handleAssignTo = (value) => {
        setIsOpen(false);
    }

    const handleDeleteCard=()=>{
        setIsOpenDropdownList(false);
        setIsOpenDeletePopup(true);
    }

    const handleLinkShare=()=>{
        navigator.clipboard.writeText(``); 
        toast.success('Link Copied')
        setIsOpenDropdownList(false);
    }

    const handelEditTodo=()=>{
        setIsEditTodoOpen(true);
        setIsOpenDropdownList(false);
    }

    return (
        <div className={Style.Container}>
            {isOpenDeletePopup&&<DeleteConfirmationPopup 
            setIsOpenDeletePopup={setIsOpenDeletePopup}
            setIsOpenDropdownList={setIsOpenDropdownList}/>}
            {isEditTodoOpen&&<CreateTodoComponent
            setCreateTodoPopupOpen={setIsEditTodoOpen}/>}
            <div className={Style.DropdownBtn}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className={Style.Circel}></div>
                <div style={{marginLeft:'10px', fontSize:'12px'}}>HIGH PRIORITY<span style={{ fontSize:'10px', padding: '3px', borderRadius: '50%', backgroundColor: 'orange' }}>{getTwoCharFromStart('atulverma2861@gmail.com')}</span></div>
                </div>
                
                <div style={{marginRight:'10px'}}><button onClick={e=>setIsOpenDropdownList(prev=>!prev)} style={{backgroundColor:'#fff', border:'none', outline:'none', cursor:'pointer'}}><BsThreeDots/></button></div>
            </div>
            {isOpenDropdownList&&(
                <div className={Style.DropdownItem}>
                    <div><button onClick={e=>handelEditTodo()} className={Style.DropdownListBtn}>Edit</button></div>
                    <div><button onClick={e=>handleLinkShare()} className={Style.DropdownListBtn}>Share</button></div>
                    <div><button onClick={e=>handleDeleteCard()} className={Style.DropdownListBtn} style={{color:'red'}}>Delete</button></div>
                </div>
            )}
            <div style={{margin:'0px 10px', fontSize:'large', fontWeight:'bold'}}>
                Hero Section
            </div>
            <div>
                <button className={Style.DropdownBtn} onClick={e => setIsOpen(prev => !prev)}>{`Checklist(0/3)`}
                    {!isOpen ? (<AiOutlineCaretUp />) : (<AiOutlineCaretDown />)}
                </button>
                {isOpen && (
                    <div className="">
                        {item.map((value, index) => (
                            <div className={Style.TaskItem} key={item}>
                            <div>
                                <input type='checkbox' style={{marginLeft:'10px'}} readOnly />
                                <input type='text' placeholder='Task to be done' readOnly className={Style.TaskInput}/>
                            </div>
                            
                        </div>
                        ))}
                    </div>
                )}
            </div>
            <div className={Style.AllBtn}>
                <div><button className={Style.Btn}>{`Due Date`}</button></div>
                <div className={Style.TaskBtn}>
                    {btn?.map((item,indx)=>item!==currentState&&
                        <button key={indx} className={Style.Btn}>{item}</button>
                    )}
                    {/* <button className={Style.Btn}>Backlog</button>
                    <button className={Style.Btn}>To-do</button>
                    <button className={Style.Btn}>Progress</button>
                    <button className={Style.Btn}>Done</button> */}
                </div>
            </div>
        </div>
    )
}