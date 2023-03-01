import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Tab,
  Tabs,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const sections = [
  {
    name: "Analyse contract",
    href: "#analyse-contract",
    target: "",
    color: "secondary.main",
    marginTop: "",
    borderTop: "",
    divider: false,
  },
  {
    name: "Tariffs",
    href: "#tariffs",
    target: "",
    color: "secondary.main",
    marginTop: "",
    borderTop: "",
    divider: false,
  },
  {
    name: "Support",
    href: "#support",
    target: "",
    color: "secondary.main",
    marginTop: "",
    borderTop: "",
    divider: true,
  },
  {
    name: "Sign in",
    href: "cabinet",
    target: "_blank",
    color: "secondary.main",
    marginTop: "20px",
    borderTop: "1px outset #ffffff2b",
    divider: false,
  },
  {
    name: "Sign up",
    href: "cabinet",
    target: "_blank",
    color: "secondary.main",
    marginTop: "",
    borderTop: "",
    divider: false,
  },
];

const DrawerMenu = () => {
  const [valueTab, setValueTab] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Tabs
          orientation="vertical"
          textColor="secondary"
          sx={{
            bgcolor: theme.palette.primary.main,
          }}
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
              target={section.target}
              sx={{
                width: "100%",
                color: section.color,
                opacity: "1",
                mt: section.marginTop,
                mx: "auto",
                borderTop: section.borderTop,
              }}
            />
          ))}
        </Tabs>
      </Drawer>
      <IconButton
        sx={{ color: theme.palette.secondary.main }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: theme.palette.secondary.main }} />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
