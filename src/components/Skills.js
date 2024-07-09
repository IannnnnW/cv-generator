import React from "react";
import { useState } from "react";
import Input from "./input";

const Skills = ({handleSubmit})=>{
    const [isOpen, setOpen] = useState(false);
    let [skill, setSkill] = useState('');

    function onSubmit(e){
        e.preventDefault()
        handleSubmit(skill)
        setSkill('');
        e.target.reset()

    }
    return (
        <form className="skills card p-2" onSubmit={onSubmit}>
            <div className="skills-title d-flex justify-content-between">
                <h5><i className="bi bi-tools m-1"></i>Skills</h5>
                {isOpen ? <i className="bi bi-arrow-up-circle" onClick={()=>setOpen(false)}/> : <i className="bi bi-arrow-down-circle" onClick={()=>setOpen(true)}/>}
            </div>
            <div className={isOpen ? 'd-flex flex-column' : 'd-none'}>
                <Input label='Skill' placeholder='Add Skill...' onChange={(e)=>{skill = e.target.value}} />
                <button type='submit' className="btn btn-secondary align-self-center mt-2 w-25">Add</button>
            </div>
        </form>
    )
}

export default Skills;