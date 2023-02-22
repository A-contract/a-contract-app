import React, {useState} from 'react';
import Link from "next/link";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";

  import MenuIcon from "@mui/icons-material/Menu";

const sections = ["Analyse contract", "Tariffs", "Support"];

const DrawerMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                anchor="top"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List style={{ backgroundColor: "#050408" }}>
                    {sections.map((section, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro", color: "#ffffff" }}>{section}</Typography>} />
                                </ListItemIcon>    
                            </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton
                style={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerMenu;