const DIGITS = "0123456789";
const SPECIAL_CHARS =
  '&!?@#$*+%=.,/\\[]{}();: ¨ ^~¨´`ç"“”‘’‚„‹›<>«»ºª–­-_  ¯…¦•‣¶§';
const MIN_LENGTH_CHARS = 8;
const MAX_LENGTH_CHARS = 24;

export type Response = {
  result: boolean;
  errors: string[];
};

export const checkPasswordValidation = (password: string): Response => {
  const response: Response = {
    result: true,
    errors: [],
  };

  if (
    password.length < MIN_LENGTH_CHARS ||
    password.length > MAX_LENGTH_CHARS
  ) {
    response.result = false;
    response.errors.push(`A senha deve conter de 8 a 24 caracteres`);
  }

  if (!digitValidation(password)) {
    response.result = false;
    response.errors.push(`
A senha deve conter pelo menos um algarismo`);
  }

  if (!specialCharsValidation(password)) {
    response.result = false;
    response.errors.push(`
A senha deve conter pelo menos um carácter especial`);
  }

  if (!upperCaseValidation(password)) {
    response.result = false;
    response.errors.push(`
A senha deve conter pelo menos uma letra maiúscula`);
  }

  if (!lowerCaseValidation(password)) {
    response.result = false;
    response.errors.push(`
A senha deve conter pelo menos uma letra minúscula`);
  }

  return response;
};

const digitValidation = (password: string): boolean => {
  const digitsCharacters = password
    .split("")
    .filter((element) => DIGITS.includes(element));
  return digitsCharacters.length < 1 ? false : true;
};

const specialCharsValidation = (password: string): boolean => {
  const specialCaracteres = password
    .split("")
    .filter((element) => SPECIAL_CHARS.includes(element));
  return specialCaracteres.length < 1 ? false : true;
};

const removeDigitsAndSpecial = (element: string): boolean => {
  return DIGITS.includes(element) || SPECIAL_CHARS.includes(element)
    ? true
    : false;
};

const upperCaseValidation = (password: string): boolean => {
  let upCase = false;

  password.split("").forEach((element) => {
    if (removeDigitsAndSpecial(element)) return true;
    if (element.toUpperCase() === element) upCase = true;
  });
  return upCase;
};

const lowerCaseValidation = (password: string): boolean => {
  let lowCase = false;

  password.split("").forEach((element) => {
    if (removeDigitsAndSpecial(element)) return true;
    if (element.toLowerCase() === element) lowCase = true;
  });
  return lowCase;
};
