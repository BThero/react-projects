import React from "react";
import { GlobalStyled } from "./styles/GlobalStyled";
import { Div, Header, H1 } from "./App.styled";
import Bud from "./components";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyled />
      <Div>
        <Header>
          <H1>Grocery Bud</H1>
        </Header>
        <Bud />
      </Div>
    </>
  );
}

export default App;
