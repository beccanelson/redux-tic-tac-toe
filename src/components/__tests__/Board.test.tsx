import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Board } from "../Board";
import { createBoard } from "../../game/utils";

const DEFAULT_BOARD = createBoard(`
  - - - 
  - - - 
  - - - 
`);

describe("Board", () => {
  afterEach(cleanup);

  it("renders spots", () => {
    const props = {
      makeMove: jest.fn(),
      board: DEFAULT_BOARD
    };
    const { queryAllByRole } = render(<Board {...props}></Board>);

    expect(queryAllByRole("button")).toHaveLength(9);
  });

  it("handles click events", () => {
    const props = {
      makeMove: jest.fn(),
      board: DEFAULT_BOARD
    };
    const { queryAllByRole } = render(<Board {...props}></Board>);

    fireEvent.click(queryAllByRole("button")[0]);

    expect(props.makeMove).toHaveBeenCalledWith(0);
  });

  it("disables spots that have content", () => {
    const props = {
      makeMove: jest.fn(),
      board: {
        ...DEFAULT_BOARD,
        0: "😻"
      }
    };

    const { queryAllByRole } = render(<Board {...props}></Board>);

    fireEvent.click(queryAllByRole("button")[0]);

    expect(props.makeMove).not.toHaveBeenCalled();
  });
});
