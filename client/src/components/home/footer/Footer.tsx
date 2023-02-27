import { Box, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
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
        color: "secondary.main"
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
        color: "secondary.main"
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
        color: "secondary.main"
    },
]

const Footer = () => {
    
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <>
        {isMatch? (
            <Box 
            component="footer" 
            sx={{ 
                bgcolor: theme.palette.primary.main, 
                width: "100%", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                py: "20px",
            }}
        >
            <Box 
                component="div" 
                sx={{ 
                    maxWidth: "inherit", 
                    width: "inherit"
                }}
            >
                <Toolbar 
                    sx={{ 
                        display: "flex",  
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <Box 
                        component="div" 
                        sx={{ mr: "auto", mb: "20px", pl: "16px" }}
                    >
                        <Box 
                            component="img" 
                            src={ logo.src } 
                            alt="logo" 
                            sx={{ width: "160px" }} 
                        />
                        <Typography sx={{ color: theme.palette.secondary.main }}>© 2023, A-contract. All Rights Reserved.</Typography>
                    </Box>
                    <Box 
                        component="div" 
                        sx={{ 
                            display: "flex",  
                            flexDirection: "column",
                        }}
                    >
                        {navigation.map((value, index) => (
                            <Box 
                                component="div" 
                                key={ index } 
                            >
                                <List>
                                    <ListItem>
                                        <ListItemText primary={
                                            <Typography sx={{ color: value.color, letterSpacing: "0.7px", fontWeight: "600" }}>{ value.title }</Typography>
                                        }>
                                        </ListItemText>
                                    </ListItem>
                                    {value.items.map((valueItem, indexItem) => (
                                        <ListItem 
                                            component="a" 
                                            href={ valueItem.href } 
                                            key={ indexItem }
                                        >
                                            <ListItemText primary={
                                                <Typography sx={{ color: valueItem.color }}>{ valueItem.name }</Typography>
                                            }></ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Box>
                    
                </Toolbar>
            </Box>
            
        </Box>
        ): (
            <Box 
            component="footer" 
            sx={{ 
                bgcolor: theme.palette.primary.main, 
                width: "100%", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                py: "20px"
            }}
        >
            <Box 
                component="div" 
                sx={{ 
                    maxWidth: "1300px", 
                    width: "inherit"
                }}
            >
                <Toolbar 
                    sx={{ 
                        display: "flex",  
                        alignItems: "center"
                    }}
                >
                    <Box 
                        component="div" 
                        sx={{ mr: "auto" }}
                    >
                        <Box 
                            component="img" 
                            src={ logo.src } 
                            alt="logo" 
                            sx={{ width: "160px" }} 
                        />
                        <Typography sx={{ color: theme.palette.secondary.main }}>© 2023, A-contract. All Rights Reserved.</Typography>
                    </Box>
                    <Box 
                        component="div" 
                        sx={{ display: "flex"}}
                    >
                        {navigation.map((value, index) => (
                            <Box 
                                component="div" 
                                key={ index } 
                                sx={{ pl: "30px"}}
                            >
                                <List>
                                    <ListItem>
                                        <ListItemText primary={
                                            <Typography sx={{ color: value.color, letterSpacing: "0.7px", fontWeight: "600" }}>{ value.title }</Typography>
                                        }>
                                        </ListItemText>
                                    </ListItem>
                                    {value.items.map((valueItem, indexItem) => (
                                        <ListItem 
                                            component="a" 
                                            href={ valueItem.href } 
                                            key={ indexItem }
                                        >
                                            <ListItemText primary={
                                                <Typography sx={{ color: valueItem.color }}>{ valueItem.name }</Typography>
                                            }></ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Box>
                    
                </Toolbar>
            </Box>
            
        </Box>
        )}
        </>  
    )
}

export default Footer;