import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Board from "../components/Board";

storiesOf("Board", module)
  .add("empty", () => <Board onClickIndex={action("click")}></Board>)
  .add("with moves", () => (
    <Board
      onClickIndex={action("click")}
      spots={["😉", "", "😻", "", "😉", "😻", "", "", "😉"]}
    ></Board>
  ));
