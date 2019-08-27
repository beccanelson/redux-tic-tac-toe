import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Board from "../components/Board";

const player1 = {
  name: "Player 1",
  symbol: "😉"
};

const player2 = {
  name: "Player 2",
  symbol: "😻"
};

storiesOf("Board", module)
  .add("empty", () => <Board onClickIndex={action("click")}></Board>)
  .add("with moves", () => (
    <Board
      onClickIndex={action("click")}
      moves={[
        player1,
        undefined,
        player2,
        undefined,
        player1,
        player2,
        undefined,
        undefined,
        player1
      ]}
    ></Board>
  ));
