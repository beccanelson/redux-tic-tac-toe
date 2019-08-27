import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Board } from "../components/Board";
import { DEFAULT_BOARD } from "../reducers/game";

const player1 = {
  name: "Player 1",
  symbol: "😉"
};

const player2 = {
  name: "Player 2",
  symbol: "😻"
};

storiesOf("Board", module)
  .add("empty", () => (
    <Board moves={DEFAULT_BOARD} makeMove={action("click")}></Board>
  ))
  .add("with moves", () => (
    <Board
      makeMove={action("click")}
      moves={{
        ...DEFAULT_BOARD,
        0: player1,
        2: player2,
        4: player1,
        5: player2,
        8: player1
      }}
    ></Board>
  ));
