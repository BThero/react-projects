import React, { SyntheticEvent } from "react";
import { HTMLForm, Input, Button } from "./Form.styled";

interface Props {
  inputText: string;
  buttonText: string;
  handleSubmit: (e: SyntheticEvent) => void;
  handleChange: (e: SyntheticEvent) => void;
}

function Form(props: Props): JSX.Element {
  return (
    <HTMLForm onSubmit={props.handleSubmit}>
      <Input
        type="text"
        placeholder="e.g. eggs"
        value={props.inputText}
        onChange={props.handleChange}
      ></Input>

      <Button type="submit">{props.buttonText}</Button>
    </HTMLForm>
  );
}

export default Form;
