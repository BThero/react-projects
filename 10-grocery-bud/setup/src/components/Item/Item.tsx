import React, { useContext } from "react";
import { GlobalContext } from "../GlobalProvider";
import { Div, P, Button, Wrapper, EditIcon, DeleteIcon } from "./Item.styled";

interface Props {
  name: string;
  id: number;
}

function Item(props: Props): JSX.Element {
  const context = useContext(GlobalContext);

  function handleClick(type: boolean) {
    if (type === false) {
      let idx = context.list.findIndex((item) => item.id === props.id);

      context.update({
        text: context.list[idx].name || "",
        activeId: props.id,
      });
    } else {
      context.update({
        list: context.list.filter((item) => {
          return item.id !== props.id;
        }),
        activeId: -1,
        alert: "delete",
      });
    }
  }

  return (
    <Div>
      <P>{props.name}</P>
      <Wrapper>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleClick(false);
          }}
        >
          <EditIcon />
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleClick(true);
          }}
        >
          <DeleteIcon />
        </Button>
      </Wrapper>
    </Div>
  );
}

export default Item;
