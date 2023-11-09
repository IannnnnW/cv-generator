import React from "react"
const Experience = ({title, from, to, company, city, country, jobDescription, isCurrent}) =>{
    return(
        <div className="mb-3">
            <div className="d-flex gap-3">
                <h6>Title: <span className="text">{title}</span></h6>
                <h6>From: <span className="text">{from}</span></h6>
                {isCurrent ? <h6>To: <span className="text">Current</span></h6> : <h6>To: <span className="text">{to}</span></h6>}
            </div>
            <div className="d-flex gap-3">
                <h6>Company: <span className="text">{company}</span></h6>
                <h6>City, Country: <span className="text">{city}, {country}</span></h6>
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