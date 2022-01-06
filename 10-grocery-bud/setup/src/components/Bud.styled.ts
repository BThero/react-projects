import styled from "styled-components";

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

export const Button = styled.button`
  background-color: var(--clr-primary-8);
  border: none;
  padding: 0.25rem;
  font-size: 0.85rem;
  letter-spacing: var(--spacing);
  flex: 0 0 5rem;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  text-transform: capitalize;
  cursor: pointer;
  line-height: 1.5;
  transition: var(--transition);

  &:hover {
    background-color: var(--clr-primary-5);
    color: white;
  }
`;

export const UL = styled.ul`
  margin-top: 1rem;
`;
