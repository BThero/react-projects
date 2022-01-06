import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Div = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

export const P = styled.p`
  text-transform: capitalize;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 0.5rem;
`;

export const Wrapper = styled.div``;

export const EditIcon = styled(FaEdit)`
  fill: var(--clr-green-light);
  cursor: pointer;
`;

export const DeleteIcon = styled(FaTrash)`
  fill: var(--clr-red-light);
  cursor: pointer;
`;
