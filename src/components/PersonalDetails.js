import React from "react";
import Input from "./input";
import '../index.css'

const PersonalDetails = ({personalDetails, onChange})=>{
    return (
        <div className="personal-details">
            <h5><i className="bi bi-person m-1"></i>Personal Details</h5>
            <div className="card d-flex flex-column">
                <Input  placeholder='First Name' value={personalDetails.firstName} onChange={onChange} name='firstName'/>
                <Input  placeholder='Second Name' value={personalDetails.secondName} onChange={onChange} name='secondName'/>
                <Input  placeholder='City' value={personalDetails.city} onChange={onChange} name='city'/>
                <Input  placeholder='Country' value={personalDetails.country} onChange={onChange} name='country'/>
                <Input  placeholder='Telephone' value={personalDetails.telephone} onChange={onChange} name='telephone'/>
                <Input  placeholder='E-mail' value={personalDetails.email} onChange={onChange} name='email'/>
            </div>
        </div>
    )
}

export default PersonalDetails