import React, { SyntheticEvent, useContext } from "react";
import { Button, UL, Div } from "./Bud.styled";
import { GlobalContext } from "./GlobalProvider";
import Item from "./Item";

function Bud(): JSX.Element {
  const context = useContext(GlobalContext);

  function handleClick(e: SyntheticEvent) {
    e.preventDefault();
    context.update({
      list: [],
      activeId: -1,
      alert: "clear",
    });
  }

  return (
    <Div>
      <UL>
        {context.list.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </UL>
      <Button onClick={handleClick}>Clear Items</Button>
    </Div>
  );
}

export default Bud;
