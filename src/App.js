import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Summary from "./components/Summary";
import Experience from './components/Experience'
import Skills from "./components/Skills";
import Education from "./components/Education";
import Language from "./components/Language";
import CVTemplate from "./components/cv-template";
import ReactToPrint from "react-to-print";

const App = ()=>{
    const printableRef = React.createRef();

    const [toggleView, setToggleView] = useState(true)
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
            <nav className="navbar"><img src="logo-title.png" alt="logo-title"/></nav>
            <div className="Generator"> 
                <div className="input-form">
                    <PersonalDetails personalDetails={personalDetails} onChange={handlechange}/>
                    <Summary summary={summary} onChange={handleSummaryChange}/>
                    <Experience handleSubmit={handleExperienceSubmit}/>
                    <Skills handleSubmit={handleSkillsSubmit}/>
                    <Education handleSubmit={handleEducationSubmit}/>
                    <Language handleSubmit={handleLanguageSubmit}/>
                </div>
                <div className="cv-template" style={toggleView ? {display:"block"} : null}>
                    <CVTemplate ref={printableRef} personalDetails={personalDetails} summary={summary} experience={experienceArray} skills={skills} education={educationArray} languages={languagesArray}/> 
                </div>
                <div className="function-buttons">
                    <button className="btn-view" onClick={()=>setToggleView(!toggleView)}><i className="bi bi-eye"></i></button>
                    <ReactToPrint
                    trigger={()=> <button className="btn-print"><i className="bi bi-printer"></i></button>}
                    content={()=> printableRef.current}
                    />
                </div>
            </div>
        </div>
    )
}

export default App;