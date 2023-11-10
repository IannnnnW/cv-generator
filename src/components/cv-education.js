import React from "react";

const Education = ({award, institute, city, from, to})=>{
    
    return(
        <div className="cv-education d-flex dis">
            <div>
                <h6>Award: <span className="text">{award}</span></h6>
                <h6>Institute, City: <span className="text">{institute}, {city}</span></h6>
                <div className="d-flex gap-5">
                    <h6>From: <span className="text">{from}</span></h6>
                    <h6>To: <span className="text">{to}</span></h6>
                </div>
            </div>
        </div>
    )
}
export default Education;