import React from "react";
import { GlobalStyled } from "./styles/Global.styled";
import { Div, Header, H1 } from "./App.styled";
import Generator from "./components/Generator";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyled />
      <Div>
        <Header>
          <H1>Tired of boring lorem ipsum?</H1>
        </Header>
        <Generator />
      </Div>
    </>
  );
}

export default App;
