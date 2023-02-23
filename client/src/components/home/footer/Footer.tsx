

import { Box, Container, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import logo  from '../../../../images/logo.png'

const navigation = ["Analyse contract", "Tariffs", "Support"];
const legal = ["Terms & Conditions", "License"];
const social = ["Telegram", "Instagram", "LinkedIn"];

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#0a0910", width: "100%", height: "250px", color: "#ffffff"}}>
            <Container>
                <Toolbar>
                    <Box>
                        <img src={ logo.src } alt="logo" style={{ width: "160px" }} />
                        <Typography style={{ fontFamily: "Cera Pro" }}>© 2023, A-contract. All Rights Reserved.</Typography>
                    </Box>
                    <Box>
                        <List>
                            <ListItem>
                                <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro", opacity: "0.7" }}>Navigation</Typography>} />
                            </ListItem>
                            {navigation.map((value, index) => (
                                <ListItem component="a" href="#" key={index}>
                                    <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro" }}>{value}</Typography>} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <List>
                            <ListItem>
                                <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro", opacity: "0.7" }}>Legal</Typography>} />
                            </ListItem>
                            {legal.map((value, index) => (
                                <ListItem component="a" href="#" key={index}>
                                    <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro" }}>{value}</Typography>} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <List>
                            <ListItem>
                                <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro", opacity: "0.7" }}>Follow Us</Typography>} />
                            </ListItem>
                            {social.map((value, index) => (
                                <ListItem component="a" href="#" key={index}>
                                    <ListItemText primary={<Typography style={{ fontFamily: "Cera Pro" }}>{value}</Typography>} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </Container>
            
        </footer>
    )
}

export default Footer;