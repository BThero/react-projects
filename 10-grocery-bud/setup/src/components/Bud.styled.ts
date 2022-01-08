import styled from "styled-components";

export const Button = styled.button`
  border: none;
  font-size: 0.85rem;
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  cursor: pointer;
  line-height: 1.5;
  transition: var(--transition);
  margin-top: 2rem;
  background-color: transparent;
  color: var(--clr-red-light);
  text-align: center;
  align-self: center;

  &:hover {
    color: var(--clr-red-dark);
  }
`;

export const UL = styled.ul`
  margin-top: 1rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
