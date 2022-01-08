import React, { useContext, useEffect } from "react";
import { GlobalStyled } from "./styles/GlobalStyled";
import { Div, Header, H1 } from "./App.styled";
import { GlobalContext } from "./components/GlobalProvider";
import Alert from "./components/Alert";
import Form from "./components/Form";
import { Bud } from "./components";

function App(): JSX.Element {
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (context.alert.length > 0) {
      let timer = setTimeout(() => {
        context.update({ alert: "" });
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [context.alert]);

  return (
    <>
      <GlobalStyled />
      <Div>
        {context.alert.length > 0 && <Alert alert={context.alert} />}
        <Header>
          <H1>Grocery Bud</H1>
        </Header>
        <main>
          <Form
            inputText={context.text}
            buttonText={context.activeId === -1 ? "Submit" : "Edit"}
          />
          {context.list.length > 0 && <Bud />}
        </main>
      </Div>
    </>
  );
}

export default App;
