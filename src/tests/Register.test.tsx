import React from "react";
import {render} from "@testing-library/react"
import Register from "../pages/register";

describe("Register Page Test", () => {
    test("Render Page", () => {
        render(<Register/>)
    })
})