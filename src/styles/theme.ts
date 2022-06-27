const colors = {
  white: "#ffffff",
  white2: "#EFEFEF",
  black: "#121212",

  bg: "#FFEBD6",
};

const fonts = {
  weight: {
    extraLight: 200,
    light: 300,
    medium: 400,
    bold: 500,
    bolder: 600,
    boldest: 700,
  },
  primary: '"Outfit", Roboto, sans-serif',
  secondary: '"Montserrat", Roboto, sans-serif',
};

const theme = {
  fonts,
  background: colors.black,
  ...colors,
};

export default theme;
