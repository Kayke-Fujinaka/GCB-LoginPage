import { generateToken } from "../utils/tokenGenerator";

describe("checkPasswordValidation", () => {
    it("Test to verify if return Token"), () => {
        expect(generateToken(12).length).toEqual(12);
    }
});
