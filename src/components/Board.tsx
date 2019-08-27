import * as React from "react";
import styled from "styled-components";
import Spot from "./Spot";

type Player = {
  name: string;
  symbol: string;
};

type BoardProps = {
  moves?: Array<Player | undefined>;
  onClickIndex(index: number): void;
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

const Board: React.SFC<BoardProps> = ({
  moves = new Array(9).fill(undefined),
  onClickIndex
}) => {
  return (
    <BoardContainer>
      {moves.map((player, i) => (
        <Spot
          title={player && player.name}
          disabled={!!player}
          onClick={() => onClickIndex(i)}
          key={i}
        >
          {player && player.symbol}
        </Spot>
      ))}
    </BoardContainer>
  );
};

export default Board;
