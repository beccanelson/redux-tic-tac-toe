import styled from "styled-components";
import { blue } from "../utilities/colors";
import { darken } from "polished";

export default styled.button`
  font-size: 1.5rem;
  border: 0;
  border-radius: 5px;
  padding: 0.75rem;
  text-align: center;
  background-color: ${blue};
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.05)(blue)};
  }
  transition: all 0.25s ease;
`;
