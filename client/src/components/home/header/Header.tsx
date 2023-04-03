import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Header = () => {
  const landPageState = useTypedSelector((state: any) => state.landPage);
  const tabs = landPageState.tabsDesktop;
  const activeTab = landPageState.activeTabId;
  const { setActiveAuthForm, setActiveLandPageTab } = useActions();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [user, setUser] = useState(false);

  useEffect(() => {
    setActiveLandPageTab(
      router.asPath !== "/"
        ? tabs.filter((element: any) => element.href === router.asPath)[0].id
        : 0
    );
    (async () => {
      const response = await axios.get("http://localhost:8000/api/user", {
        withCredentials: true,
      });
      //console.log(response.data);
      if (response.data.status === 202) {
        setUser(response.data.user);
      }
    })();
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
                <Box component="a" href="/">
                  <Box
                    component="img"
                    src={logo.src}
                    alt="logo"
                    sx={{ width: "160px" }}
                  />
                </Box>
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
                  onChange={(event: any, value: any) =>
                    setActiveLandPageTab(value)
                  }
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
                {user ? (
                  <Box component={Link} href="cabinet">
                    <Button variant="outlined" color="secondary">
                      Cabinet
                    </Button>
                  </Box>
                ) : (
                  <></>
                )}
                <Box
                  component={Link}
                  href="auth"
                  onClick={() => setActiveAuthForm(0)}
                  sx={{ ml: "10px" }}
                >
                  <Button variant="outlined" color="secondary">
                    Sign In
                  </Button>
                </Box>
                <Box
                  component={Link}
                  href="auth"
                  onClick={() => setActiveAuthForm(1)}
                  sx={{ ml: "10px" }}
                >
                  <Button variant="contained" color="secondary">
                    Sign up
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default Header;
