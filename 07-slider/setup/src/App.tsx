import { GlobalStyled } from "./styles/global.styled";
import Slider from "./components/Slider";
import { Div, Header, H1, Span } from "./App.styled";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyled />
      <Div>
        <Header>
          <H1>
            <Span>/</Span>
            Reviews
          </H1>
        </Header>
        <Slider />
      </Div>
    </>
  );
}

export default App;
