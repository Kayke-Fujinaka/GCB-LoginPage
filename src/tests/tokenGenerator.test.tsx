import { generateToken } from "../utils/tokenGenerator";

describe("Token Generator", function () {
  test("The generated token cannot be equal to anything", () => {
    expect(generateToken(12)).not.toBe("");
  });

  test("The Token generate has string length", () => {
    expect(generateToken(12).length).toBe(12);
  });
});
