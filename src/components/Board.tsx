import * as React from "react";
import styled from "styled-components";
import Spot from "./Spot";

type BoardProps = {
  spots?: string[];
  onClickIndex(index: number): void;
};

const BoardContainer = styled.div``;

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
