import React, { useState } from "react";
import { GlobalStyled } from "./styles/GlobalStyled";
import Colors from "./components/Colors/Colors";
import Header from "./components/Header/Header";
import { isValidHex } from "./common/utils";
import { Div } from "./App.styled";

function App() {
  const [color, setColor] = useState<string>("#f15025");
  const [alert, setAlert] = useState<boolean>(false);

  function handleSubmit(c: string) {
    if (isValidHex(c)) {
      setColor(c.toLowerCase());
      setAlert(false);
    } else {
      setAlert(true);
    }
  }

  return (
    <>
      <GlobalStyled />
      <Div>
        <Header handleSubmit={handleSubmit} alert={alert} />
        <Colors color={color} />
      </Div>
    </>
  );
}

export default App;
