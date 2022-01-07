import React from "react";
import { P } from "./Alert.styled";

interface Props {
  alert: string;
}

function Alert(props: Props): JSX.Element {
  function getText(alert: string) {
    if (alert === "add") {
      return "Item added";
    } else if (alert === "edit") {
      return "Item changed";
    } else if (alert === "delete") {
      return "Item deleted";
    } else {
      return "List cleared";
    }
  }

  return <P alert={props.alert}>{getText(props.alert)}</P>;
}

export default Alert;
