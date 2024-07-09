import React from "react";
import '../index.css'
const Education = ({award, institute, city, from, to, educationDescription})=>{
    
    return(
        <div className="cv-education d-flex dis">
            <div>
                <h6><span className="text">{award}, {institute}, {city} </span></h6>
                <span className="text"></span>
                <div className="d-flex gap-1">
                    <span className="duration">{from} to</span>
                    <span className="duration"> {to}</span>
                </div>
                <div className="education-description">
                    <span className="text">
                    {educationDescription}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Education;