import { Box, useTheme } from "@mui/material";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import Users from "./main/Users";

const Main = (props: any) => {
  const adminMain = [<Users />];
  const theme = useTheme();
  const adminPageState = useTypedSelector((state: any) => state.adminPage);
  const activeTab = adminPageState.activeTabId;
  const userRole = props.user.role;
  const main = adminMain;

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
      {main[activeTab]}
    </Box>
  );
};

export default Main;
