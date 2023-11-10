import React from "react";
import { useState } from "react";
import Input from "./input";

const Language = ({handleSubmit})=>{
    const [isOpen, setOpen] = useState(false);
    let [languageSetting, setLanguageSetting] = useState({
        language: '',
        proficiency: null
    })
    function onSubmit(event){
        event.preventDefault()
        handleSubmit(languageSetting)
        setLanguageSetting({
            language: '',
            proficiency: null
        })        
    }
    return (
        <form className="language card p-2" onSubmit={onSubmit}>
            <div className="language-title d-flex justify-content-between">
                <h5><i className="bi bi-megaphone m-1"></i>Language</h5>
                {isOpen ? <i className="bi bi-arrow-up-circle" onClick={()=>setOpen(false)}/> : <i className="bi bi-arrow-down-circle" onClick={()=>setOpen(true)}/>}
            </div>
            <div className={isOpen ? 'd-block d-flex flex-column  justify-content-between' : 'd-none'}>
                <Input label='Language' placeholder='Language' onChange={(e)=>{languageSetting.language = e.target.value}}/>
                Proficiency:
                <div className="d-flex justify-content-between">
                    <label>
                        <input type="radio" name="myRadio" value={Number(33)} onChange={(e)=> {languageSetting.proficiency = e.target.value}}/>
                        Low
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value={Number(66)} onChange={(e)=> {languageSetting.proficiency = e.target.value}}/>
                        Medium
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value={Number(100)} onChange={(e)=> {languageSetting.proficiency = e.target.value}}/>
                        High
                    </label>
                </div>
                <button type="submit" className="btn btn-secondary mt-2">Add</button>
            </div>
        </form>
    )
}

export default Language;