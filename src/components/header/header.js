import React from 'react'
import  './header.css'
import { updateTheme } from '../../redusers/slice';
import { FaMoon, FaLightbulb } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
function Header() {
    const {theme}=useSelector(state=>state.todoSlice)
    const dispatch=useDispatch()
    const handleDark=()=>{
        if(localStorage.theme==='dark'){
            localStorage.theme="light"
            dispatch(updateTheme("light"))

        }else{
            localStorage.theme = "dark";
            dispatch(updateTheme("dark"));
            document.documentElement.classList.add("dark");
        }
    }
  return (
<div className='header'> 
    <h1>TodoList
    </h1>
    <button    onClick={handleDark}>
        {theme==="dark"?<FaLightbulb size={20}/>:<FaMoon size={20}/>}
    </button>
</div>
  )
}

export default Header