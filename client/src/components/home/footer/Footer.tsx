import {AppBar, Box, Toolbar, Typography, makeStyles, Button, IconButton, Menu, MenuItem, Container, Tooltip, Tabs, Tab, useTheme, useMediaQuery} from "@material-ui/core";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#000000", width: "100%", height: "50px"}}>
            <Container>
                <Typography variant="h6" align="center">Footer</Typography>
            </Container>
            
        </footer>
    )
}

export default Footer;