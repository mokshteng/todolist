import React from 'react'
import './button.css'

function Button({ text, action}) {
  return (
    <button onClick={action} className='btn'>{text}</button>
  )
}

export default Button