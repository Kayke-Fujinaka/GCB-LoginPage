import React from "react"
import {render} from "@testing-library/react"
import { LoginForm } from "../components/LoginForm"

describe("Test Login Form", () => {
    test("Render Page", () => {
        render(<LoginForm/>)
    })
})