import React from 'react'

function Input({label,value,onChange,type}) {
  return (
    <div>
      <div>
      <label>{label}</label>
      <input className='form-control form-control-sm' type={type} value={value} required onChange={(e)=>onChange(e.target.value) }/>
      </div>
    </div>
  )
}

export default Input
