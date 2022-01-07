import styled, { css } from "styled-components";

export const P = styled.p`
  text-align: center;
  padding: 0.25rem;
  font-size: 0.85rem;
  letter-spacing: var(--spacing);
  line-height: 1;
  margin-bottom: 0.5rem;
  border-radius: var(--radius);

  ${(props: { alert: string }) => {
    if (props.alert === "add" || props.alert === "edit") {
      return css`
        background-color: #a3da8d;
        color: #146356;
      `;
    } else {
      return css`
        background-color: #ff7272;
        color: #9b0000;
      `;
    }
  }};
`;
