const colors = {
  primaryColor: "#423B32",
  secondColor: "#FFFFFF;", // Opacity 56%
  label: "#8B6B4A",
  button: "#F5CA9C",
};

const fonts = {
  weight: {
    normal: 400,
    bold: 500,
    semiBold: 600,
  },
  primary: "'Poppins', sans-serif",
};

const theme = {
  fonts,
  background:
    "linear-gradient(90deg, rgba(255,235,214,1) 60%, rgba(66,59,50,1) 60%)",
  ...colors,
};

export default theme;
