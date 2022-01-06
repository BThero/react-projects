import React, { SyntheticEvent, useState } from "react";
import { Main, Form, Input, Button, UL } from "./Bud.styled";
import BudItem from "./Item/BudItem";

interface Item {
  name: string;
  id: number;
}

function Bud(): JSX.Element {
  const [editMode, setEditMode] = useState<number>(-1);
  const [nextIndex, setNextIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<Array<Item>>([]);

  function handleChange(e: SyntheticEvent) {
    e.preventDefault();
    setText((e.target as HTMLInputElement).value);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!text || text.length <= 0) {
      return;
    }

    let obj = {
      name: text,
      id: nextIndex,
    };

    if (editMode === -1) {
      setList([...list, obj]);
      setNextIndex((i) => i + 1);
      setText("");
    } else {
      let newList = list;
      newList[editMode] = obj;
      setList(newList);
    }

    setEditMode(-1);
  }

  function handleItemClick(id: number, type: boolean) {
    if (type === false) {
      let idx = list.findIndex((item) => item.id === id);

      setText(list[idx].name);
      setEditMode(idx);
    } else {
      setList(
        list.filter((item) => {
          return item.id !== id;
        })
      );

      setEditMode(-1);
    }
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="e.g. eggs"
          value={text}
          onChange={handleChange}
        ></Input>
        <Button type="submit">{editMode === -1 ? "Submit" : "Edit"}</Button>
      </Form>
      {list.length > 0 && (
        <UL>
          {list.map((item, idx) => (
            <BudItem key={item.id} {...item} handleClick={handleItemClick} />
          ))}
        </UL>
      )}
    </Main>
  );
}

export default Bud;
