import React, { useState } from "react";
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

const sections = [
  {
    name: "Analyse contract",
    href: "#analyse-contract",
    color: "secondary.light",
  },
  {
    name: "Tariffs",
    href: "#tariffs",
    color: "secondary.light",
  },
  {
    name: "Support",
    href: "#support",
    color: "secondary.light",
  },
];

const Header = () => {
  const [valueTab, setValueTab] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
                <DrawerMenu />
              </Box>
            </>
          ) : (
            <>
              <Box component="div">
                {/* add style for logo */}
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
                  value={valueTab}
                  onChange={(event: any, value: any) => setValueTab(value)}
                  TabIndicatorProps={{
                    sx: { backgroundColor: theme.palette.secondary.main },
                  }}
                >
                  {sections.map((section, index) => (
                    <Tab
                      key={index}
                      label={section.name}
                      href={section.href}
                      sx={{ color: section.color }}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box component="div" sx={{ mf: "auto" }}>
                <Link href="cabinet" target="_blank">
                  <Button variant="outlined" color="secondary">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="cabinet"
                  target="_blank"
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
