import React, {useState} from 'react';
import {
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
      color: "secondary.light"
    }, 
    {
      name: "Tariffs",
      href: "#tariffs",
      color: "secondary.light"
    }, 
    {
      name: "Support",
      href: "#support",
      color: "secondary.light"
    },
]

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
                        onChange={(event : any, value : any) => (setValueTab(value))}
                        TabIndicatorProps={{
                            sx: { backgroundColor: theme.palette.secondary.main }
                        }}
                    >
                        {sections.map((section, index) => (
                            <Tab key={ index } label={ section.name } href={ section.href } sx={{ color: section.color }}/>
                        ))}
                    </Tabs>
                </Drawer>
                <IconButton
                    sx={{ color: theme.palette.secondary.main}}
                    onClick={() => setOpenDrawer(!openDrawer)}
                >
                    <MenuIcon sx={{ color: theme.palette.secondary.main }} />
                </IconButton>
        </>
    )
}

export default DrawerMenu;