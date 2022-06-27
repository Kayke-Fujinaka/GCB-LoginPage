const colors = {
  primaryColor: "#423B32",
  secondColor: "rgba(255, 255, 255, 0.56);", // Opacity 56%
  label: "#8B6B4A",
};

const fonts = {
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  primary: "'Poppins', sans-serif",
};

const theme = {
  fonts,
  background: "#FFEBD6",
  ...colors,
};

export default theme;
