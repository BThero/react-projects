import React from 'react'
import './Input.css'

interface Props {
  type: string,
  name: string, 
  text: string, 
  handleChange(state: string): void
}

export default function Input(props : Props) {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.name}>
        {props.text}
      </label>
      <input 
        type={props.type} 
        id={props.name}
        onChange={(event) => {
          event.preventDefault()
          props.handleChange(event.target.value)
        }}
      ></input>
    </div>
  )
}