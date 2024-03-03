import React from 'react'

function Input({label,value,onChange,type}) {
  return (
    <div>
      <div>
      <label>{label}<sup><span className='text-danger'>*</span></sup></label>
      <input className='form-control form-control-sm mb-3' type={type} value={value}   onChange={(e)=>onChange(e.target.value) } required/>
      </div>
    </div>
  )
}

export default Input
