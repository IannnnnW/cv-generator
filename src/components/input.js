import React from "react";

const Input = ({label, placeholder, defaultValue, onChange, name})=>{
    return(
        <label>
            {label}: <input className='input-box mb-1' name={name} type="text" placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>
        </label>
    )
}

export default Input;