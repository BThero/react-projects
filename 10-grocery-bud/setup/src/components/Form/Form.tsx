import React, { SyntheticEvent, useContext } from "react";
import { HTMLForm, Input, Button } from "./Form.styled";
import { GlobalContext } from "../GlobalProvider";

interface Props {
  inputText: string;
  buttonText: string;
}

function Form(props: Props): JSX.Element {
  const context = useContext(GlobalContext);

  function handleChange(e: SyntheticEvent) {
    e.preventDefault();
    let value = (e.target as HTMLInputElement).value;

    if (value.length <= 30) {
      context.update({ text: value });
    }
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    let { text, list, activeId, nextId } = context;

    if (!text || text.length <= 0) {
      return;
    }

    if (activeId === -1) {
      context.update({
        list: [...context.list, { name: text, id: nextId }],
        nextId: context.nextId + 1,
        alert: "add",
        text: "",
      });
    } else {
      let newList = [...list];
      let idx = list.findIndex((item) => item.id === activeId);

      if (idx !== -1) {
        newList[idx].name = text;
      }

      context.update({
        list: newList,
        alert: "edit",
        activeId: -1,
        text: "",
      });
    }
  }

  return (
    <HTMLForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="e.g. eggs"
        value={props.inputText}
        onChange={handleChange}
      ></Input>
      <Button type="submit">{props.buttonText}</Button>
    </HTMLForm>
  );
}

export default Form;
