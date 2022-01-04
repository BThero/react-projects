import styled from "styled-components";

export const HTMLHeader = styled.header`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export const H1 = styled.h1`
  display: inline;
  font-size: 1.75rem;
  color: var(--clr-grey-1);
  margin-right: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  border: ${(props: { alert: boolean }) =>
    !props.alert ? "none" : "1px solid var(--clr-red-light)"};
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  padding: 0 1rem;
  font-size: inherit;
  font-weight: inherit;
`;

export const Button = styled.button`
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background-color: ${(props: { alert: boolean }) =>
    !props.alert ? "var(--clr-primary-5)" : "var(--clr-red-light)"};
  color: white;
  padding: 0 1rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: var(--transition);
`;
