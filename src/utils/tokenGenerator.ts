export const generateToken = (lengthChars: number) => {
  var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var tokenStore = "";
  for (var i = 0; i < lengthChars; i++) {
    tokenStore += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return tokenStore;
};
