import { getPeople } from "./components/data";
import { Div, Header, H1, HR, Nav, Wrapper, OutletWrapper, StyledNavLink } from "./App.styled";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyled";

function App(): JSX.Element {
  let people = getPeople();

  return (
    <>
      <GlobalStyle />
      <Div>
        <Header>
          <H1>Experience</H1>
          <HR />
        </Header>
        <Wrapper>
          <Nav>
            {people.map((person) => (
              <StyledNavLink to={`/${person.id}`} key={person.id}>
                {person.name}
              </StyledNavLink>
            ))}
          </Nav>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </Wrapper>
      </Div>
    </>
  );
}

export default App;
