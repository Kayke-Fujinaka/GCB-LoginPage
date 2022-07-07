export const emailValidator = (email) => {
  EMAIL_NAME = email.value.substring(0, email.value.indexOf("@"));
  EMAIL_DOMAIN = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.length
  );

  if (
    EMAIL_NAME.length >= 1 &&
    EMAIL_DOMAIN.length >= 3 &&
    EMAIL_NAME.search("@") == -1 &&
    EMAIL_DOMAIN.search("@") == -1 &&
    EMAIL_NAME.search(" ") == -1 &&
    EMAIL_DOMAIN.search(" ") == -1 &&
    EMAIL_DOMAIN.search(".") != -1 &&
    EMAIL_DOMAIN.indexOf(".") >= 1 &&
    EMAIL_DOMAIN.lastIndexOf(".") < EMAIL_DOMAIN.length - 1
  ) {
    return alert("E-mail valido");
  } else {
    return alert("E-mail invalido");
  }
}
