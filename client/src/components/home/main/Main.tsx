import { Box, Divider, Paper, useMediaQuery, useTheme } from "@mui/material";
import AnalyseContract from "./sections/AnalyseContract";
import Support from "./sections/Support";
import Tariffs from "./sections/Tariffs";

const Main = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery("(max-width: 1300px)");
  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          py: 3,
          pb: "80px",
          pt: "0",
          width: isMatch ? "fit-content" : "1300px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <AnalyseContract />
          <Divider />
          <Tariffs />
          <Divider />
          <Support />
        </Box>
      </Paper>
    </Box>
  );
};

export default Main;
