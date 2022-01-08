import styled from "styled-components";

export const Div = styled.div`
  max-width: 35rem;
  margin: 8rem auto 0 auto;
  background-color: white;
  box-shadow: var(--light-shadow);
  padding: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  color: var(--clr-primary-1);
  line-height: 1;
`;

export const Main = styled.main``;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Input = styled.input`
  border: none;
  background-color: var(--clr-grey-10);
  color: var(--clr-grey-5);
  font-size: 1rem;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  flex: 1;
  line-height: 1.5;
`;
