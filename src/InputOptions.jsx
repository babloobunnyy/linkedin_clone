import React from 'react'
import './inputOptions.css'

function InputOptions({Icon,title,color}) {
  return (
    <div className='inputoption'>
    <Icon style={{color:color}} />
    <h4>{title}</h4>
    </div>
  )
}

export default InputOptions