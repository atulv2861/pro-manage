import React, { useState, useEffect } from "react";
import Style from "../Card/CardComponent.module.css";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BsThreeDots, BsCashStack } from "react-icons/bs";
import DeleteConfirmationPopup from "../Delete/DeleteConfirmationPopup";
import { toast } from "react-toastify";
import CreateTodoComponent from "../Todo/CreateTodoComponent";
import useTask from "../Hook/useTask";
import ReactTooltip from 'react-tooltip';

//import 'react-tooltip/dist/react-tooltip.css'
export default function CardComponent({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);
    const [isOpenDeletePopup, setIsOpenDeletePopup] = useState(false);
    const [isEditTodoOpen, setIsEditTodoOpen] = useState(false);
    const { handleUpdateTask } = useTask();
    const item1 = ['atulverma2861@gmail.com', 'atulverma2861@gmail.com', 'atulverma2861@gmail.com', 'atulverma2861@gmail.com', 'atulverma2861@gmail.com'];
    const btn = ['Backlog', 'Todo', 'InProgress', 'Done'];
    const getTwoCharFromStart = (str) => {
        return str?.length > 0 ? str?.substring(0, 2).toUpperCase() : '';
    }

    const handleCheckedItem = () => {
        const noOfCheckList = item?.checkList?.filter(item => item?.isChecked === true);
        return noOfCheckList && noOfCheckList?.length;
        //setIsOpen(false);
    }

    const handleDeleteCard = async () => {

        setIsOpenDropdownList(false);
        setIsOpenDeletePopup(true);

    }

    // useEffect(() => {
    //     console.log('Component rendered');
    //     ReactTooltip.rebuild(); // Rebuild tooltips in case of dynamic content
    //   }, []);

    const handleLinkShare = () => {
        navigator.clipboard.writeText(`http://localhost:3000/task/${item?._id}`);
        toast.success('Link Copied')
        setIsOpenDropdownList(false);
    }

    const handelEditTodo = () => {
        setIsEditTodoOpen(true);
        setIsOpenDropdownList(false);
    }

    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th'; // For 11th, 12th, 13th, etc.
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    function convertToRequiredFormat(data) {
        const date = new Date(data);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const formatedDate = `${month} ${day}${getOrdinalSuffix(day)}`;

        return formatedDate;
    }

    const handleUpdateStatus = async (taskId, status) => {
        const data = {
            currentStatus: status
        };
        await handleUpdateTask(taskId, data);
    }

    const showTitle=()=>{
        const length = item?.task.length;
        if(length>30){
            return item?.task?.substring(0,31)+'...';            
        }
        return item?.task;
    }

    return (<>
        {isOpenDeletePopup && <DeleteConfirmationPopup
            setIsOpenDeletePopup={setIsOpenDeletePopup}
            setIsOpenDropdownList={setIsOpenDropdownList}
            taskId={item?._id} />}
        {isEditTodoOpen && <CreateTodoComponent
            setCreateTodoPopupOpen={setIsEditTodoOpen}
            item={item} />}
        <div className={Style.Container}>

            <div className={Style.DropdownBtn}>
                <div style={{ display: 'flex', flexDirection: 'row', cursor:'default' }}>
                    {item?.priority === 'LOW PRIORITY' && <div className={Style.Circel} style={{ background: '#63C05B' }}></div>}
                    {item?.priority === 'MODERATE PRIORITY' && <div className={Style.Circel} style={{ background: '#18B0FF' }}></div>}
                    {item?.priority === 'HIGH PRIORITY' && <div className={Style.Circel} style={{ background: '#FF2473' }}></div>}
                    {/* <Tooltip data-tooltip-content={`ippppp`} id="custom-tooltip"/>
                    <div style={{ marginLeft: '10px', fontSize: '12px' }} data-for="custom-tooltip">{item?.priority}<span style={{ fontSize: '10px', padding: '3px', borderRadius: '50%', backgroundColor: 'orange' }}>{getTwoCharFromStart(item?.assignTo)}</span></div>
                 */}
                        <div style={{ marginLeft: '10px', fontSize: '12px' }}>
                            {item?.priority}
                            <span data-for="custom" data-background-color="#63C05B" data-tip={item?.assignTo} style={{ fontSize: '10px', padding: '3px', borderRadius: '50%', backgroundColor: 'orange' }}>
                                {getTwoCharFromStart(item?.assignTo)}
                            </span>
                        </div>
                        <ReactTooltip id="custom" place="top"  effect="solid" />
                    
                </div>

                <div style={{ marginRight: '10px', cursor:'pointer' }}><button onClick={e => setIsOpenDropdownList(prev => !prev)} style={{ backgroundColor: '#fff', border: 'none', outline: 'none', cursor: 'pointer' }}><BsThreeDots /></button></div>
            </div>
            {isOpenDropdownList && (
                <div className={Style.DropdownItem}>
                    <div><button onClick={e => handelEditTodo()} className={Style.DropdownListBtn}>Edit</button></div>
                    <div><button onClick={e => handleLinkShare()} className={Style.DropdownListBtn}>Share</button></div>
                    <div><button onClick={e => handleDeleteCard()} className={Style.DropdownListBtn} style={{ color: 'red' }}>Delete</button></div>
                </div>
            )}
            <div data-for={item?.task?.length>30?"title":''} data-background-color="#63C05B" data-tip={item?.task} style={{ margin: '0px 10px', fontSize: 'large', fontWeight: 'bold', cursor:'default' }}>
                {showTitle()}
            </div>
            <ReactTooltip id="title" place="top"  effect="solid" />
            <div>
                <button className={Style.DropdownBtn} onClick={e => setIsOpen(prev => !prev)}>{`Checklist(${handleCheckedItem()}/${item?.checkList?.length})`}
                    {!isOpen ?<span style={{cursor:'pointer'}}><AiOutlineCaretUp /></span> : <span style={{cursor:'pointer'}}><AiOutlineCaretDown /></span>}
                </button>
                {isOpen && (
                    <div className="">
                        {item?.checkList?.map((item, indx) => (
                            <div className={Style.TaskItem} key={indx}>
                                <div>
                                    <input type='checkbox' checked={item?.isChecked} style={{ marginLeft: '10px' }} readOnly />
                                    <input type='text' value={item?.value} placeholder='Task to be done' readOnly className={Style.TaskInput} />
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className={Style.AllBtn}>
                {item?.currentStatus === 'DONE' && <div><button style={{ background: '#63C05B', color: '#fff' }} className={Style.Btn}>{convertToRequiredFormat(item?.dueDate)}</button></div>}
                {new Date(item?.dueDate) < new Date() && item?.currentStatus !== 'DONE' && <div><button style={{ background: 'red', color: '#fff' }} className={Style.Btn}>{convertToRequiredFormat(item?.dueDate)}</button></div>}
                {new Date(item?.dueDate) > new Date() && item?.currentStatus !== 'DONE' && <div><button style={{}} className={Style.Btn}>{convertToRequiredFormat(item?.dueDate)}</button></div>}
                <div className={Style.TaskBtn}>
                    {btn?.map((item1, indx) => item1?.toLocaleLowerCase() !== item?.currentStatus?.toLocaleLowerCase() &&
                        <button key={indx} onClick={e => handleUpdateStatus(item?._id, item1?.toUpperCase())} className={Style.Btn}>{item1}</button>
                    )}
                </div>
            </div>
        </div>
    </>)
}