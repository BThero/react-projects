import React, { SyntheticEvent, useEffect, useState } from "react";
import { Div, P } from "./Color.styled";

interface Props {
  color: string;
  index: number;
  weight: number;
}

function Color(props: Props): JSX.Element {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    if (copy === true) {
      let timer = setInterval(() => {
        setCopy(false);
      }, 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [copy]);

  function handleClick(e: SyntheticEvent) {
    e.preventDefault();

    if (copy === true) {
      return;
    }

    let element = e.currentTarget as HTMLDivElement;
    let text = getComputedStyle(element).backgroundColor;
    let blob = new Blob([text], { type: "text/plain" });
    let data = [new ClipboardItem({ "text/plain": blob })];
    navigator.clipboard.write(data);
    setCopy(true);
  }

  return (
    <Div {...props} onClick={handleClick}>
      <p>{props.weight}%</p>
      <p>{props.color}</p>
      {copy && <P>Copied to clipboard</P>}
    </Div>
  );
}

export default Color;
