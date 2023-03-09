import { Box, useTheme } from "@mui/material";
import Contracts from "./main/Contracts";

const Main = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        mt: "65px",
        width: "100%",
        height: "100%",
        p: "25px",
        bgcolor: theme.palette.secondary.dark,
      }}
    >
      <Contracts />
    </Box>
  );
};

export default Main;
