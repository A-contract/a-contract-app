import { Box } from "@mui/material";
import AnalyseContract from "./sections/AnalyseContract";
import Support from "./sections/Support";
import Tariffs from "./sections/Tariffs";

const Main = () => {
  return (
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
  );
};

export default Main;
