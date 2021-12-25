import styled, { css } from "styled-components";

export const Main = styled.main``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: var(--spacing);
  margin: 2rem 0 4rem 0;
`;

export const Label = styled.label`
  text-transform: capitalize;
  color: var(--clr-primary-1);
  font-size: 1.25rem;
`;

export const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  align-self: stretch;
  border: none;
  border-radius: var(--radius);
  padding: 0.375rem 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: var(--transition);
  box-shadow: var(--light-shadow);

  ${(props: { primary?: boolean }) => {
    return props.primary
      ? css`
          background-color: var(--clr-primary-5);
          color: var(--clr-primary-1);

          &:hover {
            background-color: var(--clr-primary-8);
            color: var(--clr-primary-5);
          }
        `
      : css`
          background-color: var(--clr-green-dark);
          color: var(--clr-primary-1);

          &:hover {
            background-color: var(--clr-green-light);
            color: var(--clr-green-dark);
          }
        `;
  }}
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  width: 4rem;
  border-radius: var(--radius);
  border: none;
  margin: 0 0.5rem;
  font-size: 1.25rem;
`;

export const Section = styled.section`
  text-align: center;
`;

export const P = styled.p`
  color: var(--clr-grey-5);
  margin-bottom: 1.25rem;
  line-height: 1.5;
`;
