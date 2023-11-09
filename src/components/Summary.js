import React from 'react'

const Summary = ({summary, onChange})=>{
    return (
        <div className='personal-summary'>
            <h5>Summary</h5>
            <textarea className='card' onChange={onChange}/>
        </div>
    )
}

export default Summary;