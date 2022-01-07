import React, { SyntheticEvent, useEffect, useState } from "react";
import { Main, Button, UL } from "./Bud.styled";
import BudItem from "./BudItem";
import Alert from "./Alert";
import Form from "./Form";
interface Item {
  name: string;
  id: number;
}

function Bud(): JSX.Element {
  const [activeId, setActiveId] = useState<number>(-1);
  const [nextId, setNextId] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<Array<Item>>([]);
  const [alert, setAlert] = useState<string>("");

  useEffect(() => {
    if (alert.length > 0) {
      let timer = setTimeout(() => {
        setAlert("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alert]);

  function handleChange(e: SyntheticEvent) {
    e.preventDefault();
    let value = (e.target as HTMLInputElement).value;

    if (value.length <= 30) {
      setText(value);
    }
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!text || text.length <= 0) {
      return;
    }

    if (activeId === -1) {
      setList([...list, { name: text, id: nextId }]);
      setNextId((i) => i + 1);
      setAlert("add");
    } else {
      let newList = list;
      let idx = list.findIndex((item) => item.id === activeId);

      if (idx !== -1) {
        newList[idx].name = text;
      }

      setList(newList);
      setAlert("edit");
      setActiveId(-1);
    }

    setText("");
  }

  function handleItemClick(id: number, type: boolean) {
    if (type === false) {
      let idx = list.findIndex((item) => item.id === id);
      setText(list[idx].name || "");
      setActiveId(id);
    } else {
      setList(
        list.filter((item) => {
          return item.id !== id;
        })
      );

      setActiveId(-1);
      setAlert("delete");
    }
  }

  function handleClearEvent(e: SyntheticEvent) {
    e.preventDefault();
    setList([]);
    setActiveId(-1);
    setAlert("clear");
  }

  return (
    <Main>
      {alert.length > 0 && <Alert alert={alert} />}

      <Form
        inputText={text}
        buttonText={activeId === -1 ? "Submit" : "Edit"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {list.length > 0 && (
        <>
          <UL>
            {list.map((item) => (
              <BudItem key={item.id} {...item} handleClick={handleItemClick} />
            ))}
          </UL>

          <Button onClick={handleClearEvent}>Clear Items</Button>
        </>
      )}
    </Main>
  );
}

export default Bud;
