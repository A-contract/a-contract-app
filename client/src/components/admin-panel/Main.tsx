import { Box, useTheme } from "@mui/material";
import { useTypedSelector } from "@/hooks/useTypeSelector";

const Main = (props: any) => {
  //const adminMain = [<>Admin</>];
  const theme = useTheme();
  const cabinetState = useTypedSelector((state: any) => state.cabinet);
  const activeTab = cabinetState.activeTabId;
  const userRole = props.user.role;
  //const main = adminMain;

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
      {/* {main[activeTab]} */}
    </Box>
  );
};

export default Main;
