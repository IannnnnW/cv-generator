import React from "react";
import '../index.css'
const Input = ({placeholder, defaultValue, onChange, name})=>{
    return(
        <label>
            <input className='input-box mb-1' name={name} type="text" placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>
        </label>
    )
}

export default Input;