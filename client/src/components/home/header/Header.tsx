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
import { useRouter } from 'next/router'

const sections = [
  {
    id: 0,
    name: "Analyse contract",
    href: "/#analyse-contract",
    color: "secondary.light",
  },
  {
    id: 1,
    name: "Tariffs",
    href: "/#tariffs",
    color: "secondary.light",
  },
  {
    id: 2,
    name: "Support",
    href: "/#support",
    color: "secondary.light",
  },
];


const Header = () => {
  const activeTab = useTypedSelector((state: any) => state.landPage.activeTabId);
  const { setActiveForm, setActiveTab } = useActions(); 
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter()
  
  //console.log(router )
  

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
                  value={activeTab}
                  onChange={(event: any, value: any) => setActiveTab(value)}
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
