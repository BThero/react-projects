import React, { SyntheticEvent } from 'react'
import { BirthdayFormType, BirthdayFormType as State } from './types'

interface Props {
  handleClick(state: BirthdayFormType): void;
}

export default class BirthdayForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      date: new Date()
    }

    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick(event: SyntheticEvent) {
    event.preventDefault()

    if (this.state.firstname && this.state.lastname && this.state.date) {
      this.props.handleClick(this.state)
    }
    else {
      alert('The input is wrong')
    }
  }

  render() {
    return (
      <form>
        <div className="input-wrapper">
          <label htmlFor="firstname">
            First name:
          </label>
          <input 
            type="text" 
            id="firstname" 
            required 
            onChange={(event) => {
              event.preventDefault()
              this.setState({firstname: event.target.value})
            }}
          ></input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">
            Last name:
          </label>
          <input 
            type="text" 
            id="lastname" 
            required
            onChange={(event) => {
              event.preventDefault()
              this.setState({lastname: event.target.value})
            }}
          >
          </input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="birthday">
            Birthday:
          </label>
          <input 
            type="date" 
            id="birthday" 
            required
            onChange={(event) => {
              event.preventDefault()
              this.setState({date: new Date(event.target.value)})
            }}
          ></input>
        </div>
        <button onClick={this.handleClick}>
          Add
        </button>
      </form>
    )
  }
}
