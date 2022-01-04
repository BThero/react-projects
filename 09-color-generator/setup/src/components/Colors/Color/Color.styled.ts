import styled from "styled-components";

interface DivProps {
  color: string;
  index: number;
}

export const Div = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props: DivProps) => props.color};
  color: ${(props: DivProps) => (props.index > 10 ? "#fff" : "#000")};
  transition: var(--transition);
  cursor: pointer;
`;

export const P = styled.p`
  text-transform: uppercase;
  color: var(--clr-grey-5);
  font-size: 0.85rem;
`;
