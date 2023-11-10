import React from 'react'

const Summary = ({summary, onChange})=>{
    return (
        <div className='personal-summary'>
            <h5><i className="bi bi-journal m-1"></i>Summary</h5>
            <textarea className='card' onChange={onChange} placeholder='Say Somthing about your self...'/>
        </div>
    )
}

export default Summary;