import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Board } from "../Board";

const DEFAULT_BOARD = {
  0: undefined,
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
  6: undefined,
  7: undefined,
  8: undefined
};

describe("Board", () => {
  afterEach(cleanup);

  it("renders spots", () => {
    const props = {
      makeMove: jest.fn(),
      moves: DEFAULT_BOARD
    };
    const { queryAllByRole } = render(<Board {...props}></Board>);

    expect(queryAllByRole("button")).toHaveLength(9);
  });

  it("handles click events", () => {
    const props = {
      makeMove: jest.fn(),
      moves: DEFAULT_BOARD
    };
    const { queryAllByRole } = render(<Board {...props}></Board>);

    fireEvent.click(queryAllByRole("button")[0]);

    expect(props.makeMove).toHaveBeenCalledWith("0");
  });

  it("disables spots that have content", () => {
    const props = {
      makeMove: jest.fn(),
      moves: {
        ...DEFAULT_BOARD,
        0: { name: "Player 1", symbol: "😻" }
      }
    };

    const { queryAllByRole } = render(<Board {...props}></Board>);

    fireEvent.click(queryAllByRole("button")[0]);

    expect(props.makeMove).not.toHaveBeenCalled();
  });
});
