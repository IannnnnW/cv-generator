import React from "react";
import Experience from "./cv-experience";
import { ProgressBar } from "react-bootstrap";
import Education from "./cv-education";
import '../index.css'

const CVTemplate = React.forwardRef((props, ref)=>{
    return(
        <div>
            <h5><i class="bi bi-file-earmark-person"></i> Resume</h5>
            <div ref={ref} className="card p-3 cv">
                <div className="info-main">
                    <div className="section-one d-flex p-2">
                        <div className="d-flex flex-column">
                            <h3>{props.personalDetails.firstName}, {props.personalDetails.secondName}</h3>
                            <span>{props.personalDetails.profession}</span>
                        </div>
                    </div>
                    <div className="section-two d-flex flex-column mb-4">
                        <h6><i class="bi bi-person"></i> Profile</h6>
                        <div className="px-3">
                            <span className="text">{props.summary}</span>
                        </div>
                    </div>
                    <div className="section-three d-flex flex-column mb-4">
                        <h6><i class="bi bi-briefcase"></i> Experience</h6>
                        <div className="d-flex flex-column px-3">
                            {props.experience.map((e, index) => (
                                <Experience key={index} title={e.title} from={e.from} to={e.to} company={e.company} city={e.city} jobDescription={e.jobDescription} country={e.country} isCurrent={e.isCurrent}/>
                            ))}
                        </div>
                    </div>
                    <div className="section-five d-flex flex-column mb-4">
                        <h6><i class="bi bi-mortarboard"></i> Education</h6>
                        <div className="d-flex flex-column px-3">
                            {props.education.map((e) => (
                                <Education key={e.id} award={e.award} institute={e.institute} city={e.city} from={e.from} to={e.to} educationDescription={e.educationDescription}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="info-right">
                    <div className="header d-flex flex-column justify-content-between mb-4">
                        <h6>Details</h6>
                        <span className="text"><i className="bi bi-geo-alt m-1"/>{props.personalDetails.country} {` - ${props.personalDetails.city}`}</span>
                        <span className="text"><i className="bi bi-telephone m-1"/>{props.personalDetails.telephone}</span>
                        <span className="text"><i className="bi bi-envelope m-1"/>{props.personalDetails.email}</span>
                    </div>
                    <div className="d-flex flex-column mb-4">
                        <h6>Skills</h6>
                        <div className="d-flex flex-column">
                            {props.skills.map((skill, key) => (
                                    <p key={key}><span>{skill}</span></p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="d-flex flex-column mb-4">
                            <h6>Languages</h6>
                            <div className="d-flex flex-column">
                                {
                                    props.languages.map((l, key )=> (
                                        <div key={key}>
                                            <span className="text">{l.language}</span>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <ProgressBar now={Number(l.proficiency)} variant={ Number(l.proficiency) === 33 ? "warning": "success"}/>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
});

export default CVTemplate;