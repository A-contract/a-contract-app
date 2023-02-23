
import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: "#0A0910",
            },
            secondary: {
                main: "#FFFFFF",
                light: "#ffffffbf",
            },
            info: {
                main: "#577C61",
            },
        },
        typography: {
            fontFamily: 'Cera Pro',
            
        },
  }));

export default theme;