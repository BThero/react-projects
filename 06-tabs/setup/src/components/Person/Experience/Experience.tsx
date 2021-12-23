import React from "react";
import { Div } from "./Experience.styled";

function Experience(props: { list: string[] }): JSX.Element {
  return (
    <Div>
      <ul>
        {props.list.map((item, idx) => (
          <li key={idx}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Div>
  );
}

export default Experience;
