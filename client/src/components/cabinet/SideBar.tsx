import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Link from "next/link";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useAction";
import logo from "../../../images/logo.png";
import axios from "axios";
import router from "next/router";

const drawerWidth = 200;

const SideBar = (props: any) => {
  const theme = useTheme();
  const cabinetState = useTypedSelector((state: any) => state.cabinet);
  const { setActiveCabinetTab } = useActions();
  const userRole = props.user.role;
  const tabs =
    userRole === "lawyer"
      ? cabinetState.lawyerTabs
      : userRole === "customer"
      ? cabinetState.customerTabs
      : [];
  const activeTab = cabinetState.activeTabId;

  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then(function (response: any) {
        setActiveCabinetTab(0);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        minWidth: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "inherit",
          boxSizing: "border-box",
          bgcolor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Link href={"/"}>
          <Box
            component="img"
            src={logo.src}
            alt="logo"
            sx={{ width: "140px" }}
          />
        </Link>
      </Toolbar>
      <Tabs
        orientation="vertical"
        textColor="secondary"
        sx={{
          bgcolor: theme.palette.primary.main,
          mt: "25px",
        }}
        value={activeTab}
        onChange={(event: any, value: any) => {
          console.log(value);
          setActiveCabinetTab(value);
        }}
        TabIndicatorProps={{
          sx: { display: "none" },
        }}
      >
        {tabs.map((tab: any, index: number) => (
          <Tab
            key={index}
            label={
              <Box sx={{ ml: "10px" }}>
                <Typography>{tab.name}</Typography>
              </Box>
            }
            sx={{
              width: "100%",
              color: theme.palette.secondary.main,
              bgcolor:
                activeTab === tab.id ? theme.palette.primary.light : "inherit",
              mx: "auto",
              textTransform: "inherit",
              minHeight: "48px",
              justifyContent: "initial",
            }}
            icon={<InboxIcon sx={{ ml: "15px" }} />}
            iconPosition="start"
          />
        ))}
        <Tab
          //component={Link}
          onClick={logout}
          label={
            <Box sx={{ ml: "10px" }}>
              <Typography>Logout</Typography>
            </Box>
          }
          sx={{
            width: "100%",
            color: theme.palette.secondary.main,
            mx: "auto",
            mt: "15px",
            textTransform: "inherit",
            minHeight: "48px",
            justifyContent: "initial",
            opacity: "1",
          }}
          icon={<InboxIcon sx={{ ml: "15px" }} />}
          iconPosition="start"
        />
      </Tabs>
    </Drawer>
  );
};

export default SideBar;
