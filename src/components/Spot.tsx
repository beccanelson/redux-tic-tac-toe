import { darken } from "polished";
import styled from "styled-components";
import { gray, purple } from "../utilities/colors";

const Spot = styled.button`
  background-color: ${gray};
  margin: 0.4rem;
  border: 0;
  cursor: pointer;
  font-size: 4rem;
  transition: all 0.25s ease;
  border-radius: 5px;
  color: ${purple};

  &:active {
    animation: bounce 0.25s;
  }

  &:hover:enabled {
    background-color: ${darken(0.05)(gray)};
    margin: 0.25rem;
  }

  &:focus {
    outline: 0;
  }

  @keyframes bounce {
    75% {
      margin: 0.5rem;
    }
  }
`;

export default Spot;
