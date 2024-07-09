import React from "react";
import Experience from "./cv-experience";
import { ProgressBar } from "react-bootstrap";
import Education from "./cv-education";

const CVTemplate = React.forwardRef((props, ref)=>{
    return(
        <div>
            <h5><i class="bi bi-file-earmark-person"></i> Resume</h5>
            <div ref={ref} className="card p-3">
                <div className="header d-flex justify-content-between align-items-center">
                    <h6><span className="text"><i className="bi bi-geo-alt m-1"/>{props.personalDetails.country} {` - ${props.personalDetails.city}`}</span></h6>
                    <h6><span className="text"><i className="bi bi-telephone m-1"/>{props.personalDetails.telephone}</span></h6>
                    <h6><span className="text"><i className="bi bi-envelope m-1"/>{props.personalDetails.email}</span></h6>
                </div>
                <div className="section-one d-flex gap-5 p-2">
                    <div className="d-flex align-items-center">
                        <h3>{props.personalDetails.firstName}, {props.personalDetails.secondName}</h3>
                    </div>
                </div>
                <div className="section-two d-flex gap-5 p-2">
                    <h6>Summary:</h6>
                    <div>
                    <span className="text">
                    {props.summary}
                    </span>
                    </div>
                </div>
                <div className="section-three d-flex gap-5 p-2">
                    <h6>Experience:</h6>
                    <div className="d-flex flex-column">
                        {props.experience.map((e, index) => (
                            <Experience key={index} title={e.title} from={e.from} to={e.to} company={e.company} city={e.city} jobDescription={e.jobDescription} country={e.country} isCurrent={e.isCurrent}/>
                        ))}
                    </div>
                </div>
                <div className="section-four d-flex gap-5 p-2">
                        <h6>Skills:</h6>
                    <div className="d-flex align-items-baseline justify-content-center">
                        <ul className="skill">
                            {props.skills.map((skill, key) => (
                                    <li key={key}><span className="text">{skill}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="section-five d-flex gap-5 p-2">
                    <h6>Education:</h6>
                    <div>
                        {props.education.map((e) => (
                            <Education key={e.id} award={e.award} institute={e.institute} city={e.city} from={e.from} to={e.to}/>
                        ))}
                    </div>
                </div>
                <div className="section-six d-flex gap-5 p-2">
                    <h6>Languages:</h6>
                    <div className="language-section">
                        {
                            props.languages.map((l, key )=> (
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
        </div>
    )
});

export default CVTemplate;