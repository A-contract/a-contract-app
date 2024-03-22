import React, { useState } from "react";
import { Drawer, IconButton, Tab, Tabs, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useActions } from "@/hooks/useAction";
import Link from "next/link";

const DrawerMenu = (props: any) => {
  const tabs = props.tabs;
  const activeTab = props.activeTab;
  const { setActiveAuthForm, setActiveLandPageTab } = useActions();
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
              target={tab.target}
              sx={{
                width: "100%",
                color: tab.color,
                opacity: "1",
                mt: tab.marginTop,
                mx: "auto",
                borderTop: tab.borderTop,
              }}
            />
          ))}
          <Tab
            component={Link}
            label="Sign in"
            href="/auth"
            onClick={() => setActiveAuthForm(0)}
            sx={{
              width: "100%",
              color: "secondary.main",
              opacity: "1",
              mt: "20px",
              mx: "auto",
              borderTop: "1px outset #ffffff2b",
            }}
          />
          <Tab
            component={Link}
            label="Sign up"
            href="/auth"
            onClick={() => setActiveAuthForm(1)}
            sx={{
              width: "100%",
              color: "secondary.main",
              opacity: "1",
              mx: "auto",
              mt: "",
              borderTop: "",
            }}
          />
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
