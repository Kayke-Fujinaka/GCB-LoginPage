import React from "react";
import { render } from "@testing-library/react";
import LoadingScreen from "../utils/loadingScreen";

describe("Test Loading Screen", () => {
  test("Test render balls", () => {
    const { container } = render(<LoadingScreen />);
    expect(container.firstChild).toHaveClass(
      "loadingScreen__Screen-sc-3jlqkd-0 DusLN"
    );
  });
});
