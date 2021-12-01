import React, { SyntheticEvent, useState } from 'react'
import { BirthdayFormType } from './types'
import Input from './Input'
import './BirthdayForm.css'
interface Props {
  handleClick(state: BirthdayFormType): void;
}

export default function BirthdayForm(props : Props) {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    date: new Date()
  })

  function handleClick(event: SyntheticEvent) {
    event.preventDefault()

    if (state.firstname && state.lastname && state.date) {
      props.handleClick(state)
    }
    else {
      alert('The input is wrong')
    }
  }

  return (
    <form>
      <Input type="text" name="firstname" text="First Name" handleChange={(val : string) => {
        setState({...state, firstname: val})
      }}/>
      <Input type="text" name="lastname" text="Last Name" handleChange={(val) => {
        setState({...state, lastname: val})
      }}/>
      <Input type="date" name="date" text="Birthday" handleChange={(val) => {
        setState({...state, date: new Date(val)})
      }}/>
      <button onClick={handleClick}>
        Add
      </button>
    </form>
  )
}
