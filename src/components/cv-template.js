import React from "react";
import Experience from "./cv-experience";
import { ProgressBar } from "react-bootstrap";

const CVTemplate = ({personalDetails, summary, experience, skills, education, languages})=>{
    return(
        <div className="card p-3">
            <div className="header d-flex justify-content-between align-items-center">
                <h6><span className="text">{personalDetails.country} {` - ${personalDetails.city}`}</span></h6>
                <h6><span className="text">{personalDetails.telephone}</span></h6>
                <h6><span className="text">{personalDetails.email}</span></h6>
            </div>
            <div className="section-one d-flex gap-5 p-2">
                <img src="logo512.png" className="person" alt="logo"/>
                <div className="d-flex align-items-center">
                    <h3>{personalDetails.firstName}, {personalDetails.secondName}</h3>
                </div>
            </div>
            <div className="section-two d-flex gap-5 p-2">
                <h6>Summary:</h6>
                <div>
                <span className="text">
                {summary}
                </span>
                </div>
            </div>
            <div className="section-three d-flex gap-5 p-2">
                <h6>Experience:</h6>
                <div className="d-flex flex-column">
                    {experience.map((e, index) => (
                        <Experience key={index} title={e.title} from={e.from} to={e.to} company={e.company} city={e.city} jobDescription={e.jobDescription} country={e.country} isCurrent={e.isCurrent}/>
                    ))}
                </div>
            </div>
            <div className="section-four d-flex gap-5 p-2">
                    <h6>Skills:</h6>
                <div className="d-flex align-items-baseline justify-content-center">
                    <ul className="skill">
                        {skills.map((skill, key) => (
                                <li key={key}><span className="text">{skill}</span></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="section-five d-flex gap-5 p-2">
                <h6>Education:</h6>
                <div>
                    {education.map(e => (
                        <div className="cv-education">
                            <h6>Award: <span className="text">{e.award}</span></h6>
                            <h6>Institute, City: <span className="text">{e.institute}, {e.city}</span></h6>
                            <div className="d-flex gap-5">
                                <h6>From: <span className="text">{e.from}</span></h6>
                                <h6>To: <span className="text">{e.to}</span></h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-six d-flex gap-5 p-2">
                <h6>Languages:</h6>
                <div className="language-section">
                    {
                        languages.map((l, key )=> (
                            <div key={key}>
                                <h6>Language: <span className="text">{l.language}</span></h6>
                                <div className="d-flex gap-2">
                                    <h6>Proficiency:</h6>
                                    <div className="progress-bar">
                                        <ProgressBar animated now={Number(l.proficiency)} variant={ Number(l.proficiency) === 33 ? "warning": "success"}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CVTemplate;