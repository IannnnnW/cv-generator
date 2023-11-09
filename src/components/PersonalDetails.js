import React from "react";
import Input from "./input";
import '../index.css'

const PersonalDetails = ({personalDetails, onChange})=>{
    return (
        <div className="personal-details">
            <h5>Personal Details</h5>
            <div className="card d-flex flex-column">
                <Input label='First Name' placeholder='First Name' value={personalDetails.firstName} onChange={onChange} name='firstName'/>
                <Input label='Second Name' placeholder='Second Name' value={personalDetails.secondName} onChange={onChange} name='secondName'/>
                <Input label='City' placeholder='City' value={personalDetails.city} onChange={onChange} name='city'/>
                <Input label='Country' placeholder='Country' value={personalDetails.country} onChange={onChange} name='country'/>
                <Input label='Tel. No' placeholder='Telephone' value={personalDetails.telephone} onChange={onChange} name='telephone'/>
                <Input label='Email' placeholder='E-mail' value={personalDetails.email} onChange={onChange} name='email'/>
            </div>
        </div>
    )
}

export default PersonalDetails