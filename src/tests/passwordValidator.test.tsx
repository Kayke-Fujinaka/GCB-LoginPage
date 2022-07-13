import { checkPasswordValidation, Response } from "../utils/passwordValidator";

describe("checkPasswordValidation", () => {
  let SUT: Response;

  beforeEach(() => {
    SUT = {
      result: true,
      errors: [],
    };
  });

  test("Test to verify that the password is less than 16 Chars", () => {
    const error = "A senha deve conter de 8 a 24 caracteres";
    SUT = checkPasswordValidation("Ixf%3!");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Test to verify that the password is more than 32 Chars", () => {
    const error = "A senha deve conter de 8 a 24 caracteres";
    SUT = checkPasswordValidation("cBlPN72Bpu#L2JQdntLUY$V&&Rx!83nToZf");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Test to verify that the password does not have one Digit Chars", () => {
    const error = "A senha deve conter pelo menos um algarismo";
    SUT = checkPasswordValidation("TRmfTLfZwP&qMoay!T");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Test to verify that the password does not have two Special Chars", () => {
    const error = "A senha deve conter pelo menos um caractere especial";
    SUT = checkPasswordValidation("jkA6oEblsAXpLqQYeB");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Test to verify that the password is not Uppercase", () => {
    const error = "A senha deve conter pelo menos uma letra maiúscula";
    SUT = checkPasswordValidation("em^9haid&p43v4a54k");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Test to verify that the password is not Lowercase", () => {
    const error = "A senha deve conter pelo menos uma letra minúscula";
    SUT = checkPasswordValidation("XWD!QV*ANQ6S^45N!");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Test to verify that the password does not pass in any case", () => {
    const allErrorList = [
      "A senha deve conter de 8 a 24 caracteres",
      "A senha deve conter pelo menos um algarismo",
      "A senha deve conter pelo menos um caractere especial",
      "A senha deve conter pelo menos uma letra maiúscula",
      "A senha deve conter pelo menos uma letra minúscula",
    ];
    SUT = checkPasswordValidation("");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual(allErrorList);
  });

  test("Test to verify that the password passes in all cases", () => {
    SUT = checkPasswordValidation("7JF!h&h3f JpFtd*T^k*^");
    const { result, errors } = SUT;
    expect(result).toEqual(true);
    expect(errors).toEqual([]);
  });
});
