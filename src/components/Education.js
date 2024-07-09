import React from "react";
import { useState } from "react";
import Input from "./input";

const Education = ({handleSubmit})=>{
    let nextId = 1
    const [isOpen, setOpen] = useState(false);
    const [education, setEducation] = useState({
        id: nextId,
        award: '',
        institute: '',
        city: '',
        from: '',
        to: '',
        educationDescription: ''
    })
    function onChange(event){
        let {name, value} = event.target;
        setEducation(prevData => ({
            ...prevData,
            [name]:value
            
        }))
    }
    function onSubmit(e){
        e.preventDefault()
        handleSubmit(education)
        setEducation({
            id: nextId + 1,
            award: '',
            institute: '',
            city: '',
            from: '',
            to: '',
            educationDescription: ''
        })
        e.target.reset()
    }
    return (
        <form className="education card p-2" onSubmit={onSubmit}>
            <div className="education-title d-flex justify-content-between">
                <h5><i className="bi bi-mortarboard m-1"></i>Education</h5>
                {isOpen ? <i className="bi bi-arrow-up-circle" onClick={()=>setOpen(false)}/> : <i className="bi bi-arrow-down-circle" onClick={()=>setOpen(true)}/>}
            </div>
            <div className={isOpen ? 'd-flex flex-column' : 'd-none'}>
                <Input  placeholder='Award' name='award' onChange={onChange}/>
                <Input  placeholder='Institute' name="institute" onChange={onChange}/>
                <Input  placeholder='City' name="city" onChange={onChange}/>
                <label><span  className="date-label">From</span><input className="input-box" type="date" name="from" onChange={onChange}/></label>
                <label><span  className="date-label">To</span> <input className="input-box" type="date" name="to" onChange={onChange}/></label>
                <textarea className="card education-summary mt-3" placeholder="Description..." name='educationDescription' onChange={onChange}/>
                <button type="submit" className="btn btn-secondary mt-2">Add</button>
            </div>
        </form>
    )
}

export default Education;