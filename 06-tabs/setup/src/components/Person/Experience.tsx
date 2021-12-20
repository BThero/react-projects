import React from "react"
import { ReactComponent as Icon } from './../../assets/done_icon.svg'

function Experience(props : {list : string[]}) : JSX.Element {
  return (
    <div>
      <ul>
      {
        props.list.map((item, idx) => (
          <li key={idx}>
            <Icon />
            <span>
              {item}
            </span>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Experience