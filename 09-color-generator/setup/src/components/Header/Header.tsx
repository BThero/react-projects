import React, { SyntheticEvent, useEffect, useState } from "react";
import { HTMLHeader, H1, Form, Input, Button } from "./Header.styled";

interface Props {
  handleSubmit: (color: string) => void;
  alert: boolean;
}

function Header(props: Props): JSX.Element {
  const [color, setColor] = useState("");

  function handleChange(e: SyntheticEvent) {
    let value = (e.target as HTMLInputElement).value;

    if (value.length <= 7) {
      setColor(value);
    }
  }

  useEffect(() => {
    if (props.alert) {
      setColor("");
    }
  }, [props.alert]);

  return (
    <HTMLHeader>
      <H1>Color Generator</H1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(color);
        }}
      >
        <label htmlFor="input"></label>
        <Input
          alert={props.alert}
          id="input"
          type="text"
          placeholder="#f15025"
          onChange={handleChange}
          value={color}
        ></Input>
        <Button alert={props.alert} type="submit">
          Submit
        </Button>
      </Form>
    </HTMLHeader>
  );
}

export default Header;
