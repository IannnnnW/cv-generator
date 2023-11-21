import React from "react";
import { useState } from "react";
import Input from "./input";

const Skills = ({handleSubmit})=>{
    const [isOpen, setOpen] = useState(false);
    let [skill, setSkill] = useState('');

    function onSubmit(event){
        event.preventDefault()
        handleSubmit(skill)
        setSkill('');
    }
    return (
        <form className="skills card p-2" onSubmit={onSubmit}>
            <div className="skills-title d-flex justify-content-between">
                <h5><i className="bi bi-tools m-1"></i>Skills</h5>
                {isOpen ? <i className="bi bi-arrow-up-circle" onClick={()=>setOpen(false)}/> : <i className="bi bi-arrow-down-circle" onClick={()=>setOpen(true)}/>}
            </div>
            <div className={isOpen ? 'd-block d-flex align-items-center justify-content-between skill-body' : 'd-none skill-body'}>
                <Input label='Skill' placeholder='Add Skill...' onChange={(e)=>{skill = e.target.value}} />
                <button type='submit' className="btn btn-secondary mt-2">Add</button>
            </div>
        </form>
    )
}

export default Skills;