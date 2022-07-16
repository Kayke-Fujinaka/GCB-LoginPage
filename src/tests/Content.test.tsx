import React from "react";
import { render } from "@testing-library/react";
import { Content } from "../components/Content";

describe("Test Component Content", () => {
  test("Test Heading", () => {
    const { getByRole } = render(<Content />);
    expect(
      getByRole("heading", {
        name: /até onde conseguimos chegar\?/i,
      })
    ).toBeInTheDocument();
  });

  test("Test Paragraph", () => {
    const { getByText } = render(<Content />);
    expect(getByText(/essa resposta é o que/i)).toBeInTheDocument();
  });
});
