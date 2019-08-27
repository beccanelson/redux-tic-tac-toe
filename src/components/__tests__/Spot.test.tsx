import { cleanup, fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Spot from "../Spot";

describe("Spot", () => {
  afterEach(cleanup);

  it("handles a click event", () => {
    const props = {
      onClick: jest.fn()
    };

    const { getByRole } = render(<Spot {...props}></Spot>);

    fireEvent.click(getByRole("button"));

    expect(props.onClick).toHaveBeenCalled();
  });

  it("can be disabled", () => {
    const props = {
      onClick: jest.fn(),
      disabled: true
    };

    const { getByRole } = render(<Spot {...props}></Spot>);

    fireEvent.click(getByRole("button"));

    expect(props.onClick).not.toHaveBeenCalled();
  });
});
