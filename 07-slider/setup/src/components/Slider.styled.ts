import styled from "styled-components";

export const Main = styled.main`
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  width: 80vw;
  max-width: 800px;
  height: 450px;
`;

interface ButtonProps {
  left?: boolean;
  right?: boolean;
}

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  position: absolute;
  font-size: 1.5rem;
  border-color: transparent;
  border-radius: var(--radius);
  cursor: pointer;
  background-color: var(--clr-grey-5);
  color: var(--clr-white);
  transition: var(--transition);

  left: ${(props: ButtonProps) => (props.left ? 0 : "default")};
  right: ${(props: ButtonProps) => (props.right ? 0 : "default")};

  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background-color: var(--clr-primary-5);
  }
`;
