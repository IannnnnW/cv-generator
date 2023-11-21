import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Summary from "./components/Summary";
import Experience from './components/Experience'
import Skills from "./components/Skills";
import Education from "./components/Education";
import Language from "./components/Language";
import CVTemplate from "./components/cv-template";

const App = ()=>{
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '', 
        secondName: '', 
        city: '',
        country: '',
        telephone: '', 
        email: ''
    })
    function handlechange(event){
        const {name, value} = event.target
        setPersonalDetails(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const [summary, setSummary] = useState('')
    function handleSummaryChange(event){
        setSummary(event.target.value)
    }
    const [experienceArray, setExperienceArray] = useState([])

    const handleExperienceSubmit = (formData)=>{
        setExperienceArray(prevData => ([
            ...prevData,
            formData
        ]))
    }

    const [skills, setSkills] = useState([])
    const handleSkillsSubmit = (formData)=>{
        setSkills(prevData => ([
            ...prevData,
            formData
        ]))
    }

    const [educationArray, setEducationArray] = useState([])
    function handleEducationSubmit(formData){
        setEducationArray(prevData => ([
            ...prevData,
            formData
        ]))
    }
    const [languagesArray, setLanguagesArray] = useState([])
    function handleLanguageSubmit(formData){
        setLanguagesArray(prevData => ([
            ...prevData,
            formData
        ]))
    }
    return (
        <div className="body">
            <nav className="navbar d-flex justify-content-center"><i className="bi bi-file-earmark-person m-1"></i> CV Generator</nav>
            <div className="Generator d-flex justify-content-center"> 
                <div className="input-form">
                    <PersonalDetails personalDetails={personalDetails} onChange={handlechange}/>
                    <Summary summary={summary} onChange={handleSummaryChange}/>
                    <Experience handleSubmit={handleExperienceSubmit}/>
                    <Skills handleSubmit={handleSkillsSubmit}/>
                    <Education handleSubmit={handleEducationSubmit}/>
                    <Language handleSubmit={handleLanguageSubmit}/>
                </div>
                <div className="d-flex gap-3">
                    <button className="btn btn-primary"><i className="bi bi-eye"></i> View CV</button>
                    <button className="btn btn-secondary"><i class="bi bi-printer"></i> Print CV</button>
                </div>
                <div className="cv-template">
                    <CVTemplate personalDetails={personalDetails} summary={summary} experience={experienceArray} skills={skills} education={educationArray} languages={languagesArray}/> 
                </div>
            </div>
        </div>
    )
}

export default App;