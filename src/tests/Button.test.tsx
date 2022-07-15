import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Checkbox Test", () => {
  test("Testing button exist", () => {
    const { getByText } = render(
      <Button type="button" color="#000000" bgColor="#ffffff">
        Botão
      </Button>
    );
    const button = getByText("Botão");
    expect(button).toBeInTheDocument();
  });
});
