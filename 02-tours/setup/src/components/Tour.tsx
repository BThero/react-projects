import React, { SyntheticEvent, useState } from 'react'
import { Card } from './types'
import './Tour.css'

interface Props {
  data : Card, 
  onRemove: (event: SyntheticEvent) => void,
}

function Tour(props : Props) {
  const [expand, setExpand] = useState<Boolean>(false);

  return (
    <div className="tour-wrapper">
      <img src={props.data.imageUrl} alt="something"/>
      <div className="content-wrapper">
        <div className="heading-wrapper">
          <h3 className="heading">
            {props.data.heading}
          </h3>
          <span className="price">
            ${props.data.price}
          </span>
        </div>
        <p className="description">
          {expand ? props.data.description : `${props.data.description.substring(0, 200)}...`}
          <button className="expand" onClick={(event) => {
            setExpand(!expand)
          }}>
            {expand ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete" onClick={(event) => {
          props.onRemove(event)
        }}>
          Not interested
        </button>
      </div>
    </div>
  )
}

export default Tour