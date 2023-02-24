

import { Box, Container, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme } from "@mui/material";
import logo  from '../../../../images/logo.png'


const navigation = [
    {
        title: "Navigation",
        items: [
            {
                name: "Analyse contract",
                href: "#analyse-contract",
                color: "secondary.main",
            },
            {
                name: "Tariffs",
                href: "#tariffs",
                color: "secondary.main",
            }, 
            {
                name: "Support",
                href: "#support",
                color: "secondary.main",
            },
        ],
        color: "secondary.light"
    },
    {
        title: "Legal",
        items: [
            {
                name: "Terms & Conditions",
                href: "#",
                color: "secondary.main",
            },
            {
                name: "License",
                href: "#",
                color: "secondary.main",
            }, 
        ],
        color: "secondary.light"
    },
    {
        title: "Social",
        items: [
            {
                name: "Telegram",
                href: "#",
                color: "secondary.main",
            },
            {
                name: "Instagram",
                href: "#",
                color: "secondary.main",
            }, 
            {
                name: "LinkedIn",
                href: "#",
                color: "secondary.main",
            },
        ],
        color: "secondary.light"
    },
]

const Footer = () => {
    const theme = useTheme();
    
    return (
        <Box component="footer" sx={{ bgcolor: theme.palette.primary.main, width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Box component="div" sx={{ maxWidth: "1300px", width: "inherit", alignItems: "center"}}>
                <Toolbar>
                    <Box>
                        <Box component="img" src={ logo.src } alt="logo" style={{ width: "160px" }} />
                        <Typography sx={{ color: theme.palette.secondary.main }}>© 2023, A-contract. All Rights Reserved.</Typography>
                    </Box>
                    {navigation.map((value, index) => (
                        <Box component="div" key={ index }>
                            <List>
                                <ListItem>
                                    <ListItemText primary={
                                        <Typography sx={{ color: value.color }}>{ value.title }</Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                                {value.items.map((valueItem, indexItem) => (
                                    <ListItem component="a" href={ valueItem.href } key={ indexItem }>
                                        <ListItemText primary={
                                            <Typography sx={{ color: valueItem.color }}>{ valueItem.name }</Typography>
                                        }></ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))}
                </Toolbar>
            </Box>
            
        </Box>
    )
}

export default Footer;