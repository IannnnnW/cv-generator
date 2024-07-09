import React from "react"
import '../index.css'

const Experience = ({title, from, to, company, city, country, jobDescription, isCurrent}) =>{
    return(
        <div className="mb-3">
            <div className="d-flex flex-column">
                <h6><span className="text">{title} at {company}, {city}, {country}</span></h6>
                <div className="d-flex gap-1">
                    <span className="duration">from {from}</span> {isCurrent ? <span className="duration">to Current</span> : <span className="duration">{`to ${to}`}</span>}
                </div>
            </div>
            <div className="job-description">
                <span className="text">
                {jobDescription}
                </span>
            </div>
        </div>
    )
}
export default Experience;