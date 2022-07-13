import React, { ChangeEvent } from "react";
import { render, fireEvent } from "@testing-library/react";
import { CheckBox, CheckBoxProps } from "../components/CheckBox";

it("renders correctly", () => {
    const func = jest.fn()
    const {type} = render(<CheckBox/>)
});
