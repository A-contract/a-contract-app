import React, {useState} from 'react';
import Link from "next/link";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";

  import MenuIcon from "@mui/icons-material/Menu";

const sections = ["Analyse contract", "Tariffs", "Support"];

const DrawerMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {sections.map((section, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>{section}</ListItemText>
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