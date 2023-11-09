import React from "react";
import { useState } from "react";
import Input from "./input";

const Experience = ({handleSubmit})=>{
    const [isOpen, setOpen] = useState(false);
    const [experience, setExperience] = useState({
        title:'',
        company: '',
        from: '',
        to: '',
        city: '',
        country: '',
        isCurrent: false,
        jobDescription:''

    })

    function handleChange(e){
        const {name, value, type, checked} = e.target
        const newValue = type === 'checkbox' ? checked : value
        setExperience(prevData => ({
            ...prevData,
            [name] : newValue
        }))
    }
    function onFormSubmit(e){
        e.preventDefault()
        handleSubmit(experience)
        setOpen(false)
        setExperience({
            title:'',
            company: '',
            from: '',
            to: '',
            city: '',
            country: '',
            isCurrent: false,
            jobDescription:''
        })
    }
    return (
        <form className="experience card p-2" onSubmit={onFormSubmit}>
            <div className="experience-title d-flex justify-content-between">
                <h5>Experience</h5>
                {isOpen ? <i className="bi bi-arrow-up-circle" onClick={()=>setOpen(false)}/> : <i className="bi bi-arrow-down-circle" onClick={()=>setOpen(true)}/>}
            </div>
            <div className={isOpen ? 'd-block' : 'd-none'}>
                <Input label='Title / Role' placeholder='Title' onChange={handleChange} name='title'/>
                <Input label='Company' placeholder='Company' onChange={handleChange} name='company'/>
                <label>From: <input className="input-box" type="date" onChange={handleChange} name="from"/></label>
                <label>To: <input className="input-box" type="date" onChange={handleChange} name="to"/></label>
                <Input label='City' placeholder='City' onChange={handleChange} name='city'/>
                <Input label='Country' placeholder='Country' onChange={handleChange} name='country'/>
                <label>Current: <input type="checkbox" onChange={handleChange} name="isCurrent"/></label>
                <textarea className="card experience-summary mt-3" placeholder="Description..." name='jobDescription' onChange={handleChange}/>
                <button className="btn btn-secondary mt-2" type="submit">Add</button>
            </div>
        </form>
    )
}

export default Experience;