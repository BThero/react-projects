import { getPeople } from "./components/data";
import { Div, Header, H1, HR, Nav, Main, OutletWrapper, StyledNavLink } from "./App.styled";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  let people = getPeople();

  return (
    <Div>
      <Header>
        <H1>Experience</H1>
        <HR />
      </Header>
      <Main>
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
      </Main>
    </Div>
  );
}

export default App;
