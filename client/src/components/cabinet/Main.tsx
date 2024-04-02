import { Box, useTheme } from "@mui/material";
import Contracts from "./main/Contracts";
import Workspace from "./main/Workspace";
import Support from "./main/Support";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import Settings from "./main/Settings";

const Main = (props: any) => {
  const lawyerMain = [
    <Contracts role={props.user.role} key={""} />,
    <Workspace key={""} />,
    <Support key={""} />,
    <Settings
      user={props.user}
      setActionTrigger={props.setActionTrigger}
      actionTrigger={props.actionTrigger}
      key={""}
    />,
  ];
  const customerMain = [
    <Contracts role={props.user.role} key={""} />,
    <Support key={""} />,
    <Settings
      user={props.user}
      setActionTrigger={props.setActionTrigger}
      actionTrigger={props.actionTrigger}
      key={""}
    />,
  ];
  const theme = useTheme();
  const cabinetState = useTypedSelector((state: any) => state.cabinet);
  const activeTab = cabinetState.activeTabId;
  const userRole = props.user.role;
  const main =
    userRole === "lawyer"
      ? lawyerMain
      : userRole === "customer"
      ? customerMain
      : [];

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
