import * as React from "react";
import styled from "styled-components";
import Spot from "./Spot";
import { Board as BoardState } from "../types";

type BoardProps = {
  board: BoardState;
  makeMove(key: number): void;
};

const BoardContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

export const Board: React.SFC<BoardProps> = ({ board, makeMove }) => {
  return (
    <BoardContainer>
      {Object.keys(board).map(i => {
        const marker = board[Number(i)];
        return (
          <Spot disabled={!!marker} onClick={() => makeMove(Number(i))} key={i}>
            {marker}
          </Spot>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
