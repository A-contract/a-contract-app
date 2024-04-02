import React, { useEffect, useState } from "react";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useRouter } from "next/router";
import axios from "axios";
import { ArrowDropDown } from "@mui/icons-material";

const Header = () => {
  const landPageState = useTypedSelector((state: any) => state.landPage);
  const tabs = landPageState.tabsDesktop;
  const activeTab = landPageState.activeTabId;
  const { setActiveAuthForm, setActiveLandPageTab } = useActions();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [user, setUser] = useState(false);
  const [userRoute, setUserRoute] = useState("");
  const [language, setLanguage] = useState("En");

  useEffect(() => {
    setActiveLandPageTab(
      router.asPath !== "/"
        ? tabs.filter((element: any) => router.asPath.includes(element.href))[0]
            .id
        : 0
    );
    (async () => {
      const response = await axios.get(
        `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/auth/user`,
        {
          withCredentials: true,
        }
      );
      if (response.data.status === 200) {
        setUser(response.data.user);
        setUserRoute(response.data.route);
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
                    src={"/static/images/logo.png"}
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
                  onChange={(event: any, value: any) => {
                    if (value < 3) setActiveLandPageTab(value);
                  }}
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

              <Box component="div" sx={{ display: "contents" }}>
                <Box color="white" sx={{ mx: 2 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="language-select-label"
                      id="language-select"
                      variant="outlined"
                      color="secondary"
                      value={language}
                      renderValue={(selected) => (
                        <span style={{ color: "white" }}>{selected}</span>
                      )}
                      onChange={(e) => {
                        setLanguage(e.target.value);
                      }}
                      label="Choose the language"
                      sx={{
                        color: "white",
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                      }}
                    >
                      <MenuItem value="En">En</MenuItem>
                      <MenuItem value="Uk">Uk</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {user ? (
                  <Box component={Link} href={"/" + userRoute}>
                    <Button variant="outlined" color="secondary">
                      Cabinet
                    </Button>
                  </Box>
                ) : (
                  <></>
                )}
                <Box
                  component={Link}
                  href="/auth"
                  onClick={() => setActiveAuthForm(0)}
                  sx={{ ml: "10px" }}
                >
                  <Button variant="outlined" color="secondary">
                    Sign In
                  </Button>
                </Box>
                <Box
                  component={Link}
                  href="/auth"
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
