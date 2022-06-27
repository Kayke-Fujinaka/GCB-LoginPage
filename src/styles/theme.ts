const colors = {
  primaryColor: "#423B32",
  secondColor: "#ffffff", // Opacity 56%
  label: "#8B6B4A",
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
  primary: '"Outfit", Poppins, sans-serif',
  secondary: '"Outfit", Roboto, sans-serif',
};

const theme = {
  fonts,
  background: "#FFEBD6",
  ...colors,
};

export default theme;
