import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Board from "../Board";

describe("Board", () => {
  afterEach(cleanup);

  it("renders nine spots", () => {
    const props = {
      onClickIndex: jest.fn()
    };
    const { queryAllByRole } = render(<Board {...props}></Board>);

    expect(queryAllByRole("button")).toHaveLength(9);
  });

  it("handles click events", () => {
    const props = {
      onClickIndex: jest.fn()
    };
    const { queryAllByRole } = render(<Board {...props}></Board>);

    fireEvent.click(queryAllByRole("button")[0]);

    expect(props.onClickIndex).toHaveBeenCalledWith(0);
  });

  it("disables spots that have content", () => {
    const props = {
      onClickIndex: jest.fn(),
      moves: [
        { name: "Player 1", symbol: "😻" },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]
    };

    const { queryAllByRole } = render(<Board {...props}></Board>);

    fireEvent.click(queryAllByRole("button")[0]);

    expect(props.onClickIndex).not.toHaveBeenCalled();
  });
});
