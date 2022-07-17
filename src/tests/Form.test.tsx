/* eslint-disable react/no-children-prop */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "../components/Form";

describe("Test Form", () => {
  test("Test render", () => {
    render(<Form children="" />);
  });
});
