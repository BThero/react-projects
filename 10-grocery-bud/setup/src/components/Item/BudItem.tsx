import React from "react";
import {
  Div,
  P,
  Button,
  Wrapper,
  EditIcon,
  DeleteIcon,
} from "./BudItem.styled";

interface Props {
  name: string;
  id: number;
  handleClick: (id: number, type: boolean) => void;
}

function BudItem(props: Props): JSX.Element {
  return (
    <Div>
      <P>{props.name}</P>
      <Wrapper>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.handleClick(props.id, false);
          }}
        >
          <EditIcon />
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.handleClick(props.id, true);
          }}
        >
          <DeleteIcon />
        </Button>
      </Wrapper>
    </Div>
  );
}

export default BudItem;
