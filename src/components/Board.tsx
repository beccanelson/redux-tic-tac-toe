import * as React from "react";
import styled from "styled-components";
import Spot from "./Spot";

type BoardProps = {
  spots?: string[];
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
  spots = new Array(9).fill(""),
  onClickIndex
}) => {
  return (
    <BoardContainer>
      {spots.map((spot, i) => (
        <Spot disabled={!!spot} onClick={() => onClickIndex(i)} key={i}>
          {spot}
        </Spot>
      ))}
    </BoardContainer>
  );
};

export default Board;
