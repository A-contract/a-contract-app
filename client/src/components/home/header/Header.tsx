import React, { useEffect } from "react";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import logo from "../../../../images/logo.png";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useRouter } from "next/router";

const Header = () => {
  const landPageState = useTypedSelector((state: any) => state.landPage);
  const tabs = landPageState.tabsDesktop;
  const activeTab = landPageState.activeTabId;
  const { setActiveForm, setActiveTab } = useActions();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== "/")
      setActiveTab(
        tabs.filter((element: any) => element.href === router.asPath)[0].id
      );
  }, []);

  return (
    <AppBar color="primary" sx={{ alignItems: "center" }}>
      <Box
        component="div"
        sx={{
          maxWidth: "1300px",
          width: "inherit",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Box component="div">
                <Typography>A-contract</Typography>
              </Box>
              <Box component="div" sx={{ ml: "auto" }}>
                <DrawerMenu
                  tabs={landPageState.tabsMobile}
                  activeTab={activeTab}
                />
              </Box>
            </>
          ) : (
            <>
              <Box component="div">
                <img src={logo.src} alt="logo" style={{ width: "160px" }} />
              </Box>
              <Box
                component="div"
                sx={{
                  mr: "auto",
                  ml: "50px",
                }}
              >
                <Tabs
                  textColor="secondary"
                  value={activeTab}
                  onChange={(event: any, value: any) => setActiveTab(value)}
                  TabIndicatorProps={{
                    sx: { backgroundColor: theme.palette.secondary.main },
                  }}
                >
                  {tabs.map((tab: any, index: number) => (
                    <Tab
                      key={index}
                      label={tab.name}
                      href={tab.href}
                      sx={{ color: tab.color }}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box component="div" sx={{ mf: "auto" }}>
                <Link href="auth" onClick={() => setActiveForm(0)}>
                  <Button variant="outlined" color="secondary">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="auth"
                  onClick={() => setActiveForm(1)}
                  style={{ marginLeft: "10px" }}
                >
                  <Button variant="contained" color="secondary">
                    Sign up
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default Header;
