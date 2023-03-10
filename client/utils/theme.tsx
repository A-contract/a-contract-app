import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#0A0910",
        dark: "#000000",
        light: "#33304b"
      },
      secondary: {
        main: "#FFFFFF",
        light: "#ffffffbf",
        dark: "#eeeeee",
      },
      info: {
        main: "#638D6E",
        dark: "#efeeee",
        light: "#577C61",
      },
    },
    typography: {
      fontFamily: "Cera Pro Regular",
    },
  })
);

export default theme;
