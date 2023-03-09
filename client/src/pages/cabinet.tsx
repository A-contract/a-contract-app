import Header from "@/components/cabinet/Header";
import Main from "@/components/cabinet/Main";
import SideBar from "@/components/cabinet/SideBar";
import { Box, CssBaseline } from "@mui/material";

const Cabinet = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Main />
    </Box>
  );
};

export default Cabinet;
