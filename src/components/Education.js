import React from "react";
import { useState } from "react";
import Input from "./input";

const Education = ({handleSubmit})=>{
    const [isOpen, setOpen] = useState(false);
    const [education, setEducation] = useState({
        award: '',
        institute: '',
        city: '',
        from: '',
        to: ''
    })
    function onChange(event){
        let {name, value} = event.target;
        setEducation(prevData => ({
            ...prevData,
            [name]:value
        }))
    }
    function onSubmit(event){
        event.preventDefault()
        handleSubmit(education)
        setEducation({
            award: '',
            institute: '',
            city: '',
            from: '',
            to: ''
        })
    }
    return (
        <form className="education card p-2" onSubmit={onSubmit}>
            <div className="education-title d-flex justify-content-between">
                <h5>Education</h5>
                {isOpen ? <i className="bi bi-arrow-up-circle" onClick={()=>setOpen(false)}/> : <i className="bi bi-arrow-down-circle" onClick={()=>setOpen(true)}/>}
            </div>
            <div className={isOpen ? 'd-block' : 'd-none'}>
                <Input label='Award' placeholder='Award' name='award' onChange={onChange}/>
                <Input label='Institute' placeholder='Institute' name="institute" onChange={onChange}/>
                <Input label='City' placeholder='City' name="city" onChange={onChange}/>
                <div>
                    <label>From: <input className="input-box" type="date" name="from" onChange={onChange}/></label>
                    <label>To: <input className="input-box" type="date" name="to" onChange={onChange}/></label>
                </div>
                <button type="submit" className="btn btn-secondary mt-2">Add</button>
            </div>
        </form>
    )
}

export default Education;