import React, { useState } from 'react'
import { QuestionData } from './types'
import './Question.css'

export default function Question(props : QuestionData) : JSX.Element {
  const [hidden, setHidden] = useState<Boolean>(true);
  
  function handleClick() {
    setHidden(!hidden)
  }

  return (
    <article className="question-container">
      <header>
        <h2 className="question">{props.question}</h2>
        <button className="hide" onClick = {handleClick}>
          {hidden ? '+' : '-'}
        </button>
      </header>
      {hidden ? null : <p className="answer">{props.answer}</p>}
    </article>
  )
}
