import { generateToken } from "../utils/tokenGenerator";

test("The generated token cannot be equal to anything", () => {
  expect(generateToken(12)).not.toBe("");
});

test("The Token generate has string length", () => {
  expect(generateToken(12).length).toBe(12);
});

test("The Token generate is random number", () => {
  const generateTokenTest = (lengthChars: number) => {
    const CHARS =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let tokenStore = "";
    for (let i = 0; i < lengthChars; i++) {
      tokenStore += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    expect(generateTokenTest(12)).toBe(tokenStore);
  };
});
