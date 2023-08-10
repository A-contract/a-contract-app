import { Box, Paper } from "@mui/material";
import AnalyseContract from "./sections/AnalyseContract";
import Support from "./sections/Support";
import Tariffs from "./sections/Tariffs";

const Main = () => {
  return (
    <Paper elevation={1} sx={{ py: 3, px: 15 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          pb: "80px",
          pt: "0",
        }}
      >
        <AnalyseContract />
        <Tariffs />
        <Support />
      </Box>
    </Paper>
  );
};

export default Main;
