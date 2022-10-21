import React, { useState, useRef } from "react";
import './todoheader.css'
import { useDispatch,useSelector } from "react-redux";
import {updateFilterStatus}from '../../redusers/slice'
function Todoheader() {
    const {theme}=useSelector(state=>state.todoSlice)
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const filter = useRef();
    const modalHandler = () => {
        setIsOpen(!isOpen);
    };
    const filterHandler = () => {
      dispatch(updateFilterStatus(filter.current.value));
    };
  return (
<>
<div className="todohead">
    <select className={`${theme==="dark"? "dark": ""}`} onChange={filterHandler} >
    <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
    </select>
    <button onClick={modalHandler}>Add Task</button>
</div>

</>  )
}

export default Todoheader