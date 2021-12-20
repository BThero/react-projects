import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  background-color: var(--color-gray-10);
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HR = styled.hr`
  width: 5rem;
  height: 0.25rem;
  border: none;
  background-color: var(--color-primary-5);
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  color: var(--color-gray-1);
  margin-bottom: 0.75rem;
  text-transform: capitalize;
  line-height: 1;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 2;
  margin-right: 5rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 85%;
  margin: 4rem auto;
`;

export const OutletWrapper = styled.div`
  flex: 11;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 1.25rem;
  line-height: 1;
  text-decoration: none;
  letter-spacing: 0.1rem;
  padding: 0.25rem 0;
  margin-bottom: 1rem;
  transition: var(--transition);
  text-transform: uppercase;

  &.active, &:hover {
    color: var(--color-primary-5);
    box-shadow: -2px 0 var(--color-primary-5);
  }
`
