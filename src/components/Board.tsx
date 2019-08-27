import * as React from "react";
import styled from "styled-components";
import Spot from "./Spot";
import { Player } from "../types";
import { AppState } from "../store";
import { connect } from "react-redux";

type BoardProps = {
  moves?: { [key: string]: Player | undefined };
  makeMove(key: string): void;
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

export const Board: React.SFC<BoardProps> = ({ moves = {}, makeMove }) => {
  return (
    <BoardContainer>
      {Object.keys(moves).map(i => {
        const player = moves[i];
        return (
          <Spot
            title={player && player.name}
            disabled={!!player}
            onClick={() => makeMove(i)}
            key={i}
          >
            {player && player.symbol}
          </Spot>
        );
      })}
    </BoardContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  moves: state.board.board
});

export default connect(mapStateToProps)(Board);
