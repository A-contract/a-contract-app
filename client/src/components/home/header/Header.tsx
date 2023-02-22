import React, {useState} from 'react';
import Link from "next/link";
import {AppBar, Box, Toolbar, Typography, makeStyles, Button, IconButton, Menu, MenuItem, Container, Tooltip, Tabs, Tab, useTheme, useMediaQuery} from "@material-ui/core";
import DrawerMenu from './DrawerMenu';
import logo  from '../../../../images/logo.png'

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <AppBar style={{ background: "#0A0910"}}>
        <Toolbar>
        {isMatch ? (
          <>
            <Typography style={{ fontFamily: "Cera Pro" }} >A-contract</Typography>
            <DrawerMenu />
          </>
        ) : (
          <>
              <img src={ logo.src } alt="logo" style={{ width: "160px" }} />
            
            <Tabs 
              style={{ marginLeft: "auto"}}
              textColor="inherit" 
              value={value} 
              onChange={(e, value) => setValue(value)}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#ffffff"
                }
              }}
            >
              <Tab style={{ fontFamily: "Cera Pro" }} label="Analyse contract" href="#analyse-contract" />
              <Tab style={{ fontFamily: "Cera Pro" }} label="Tariffs" href="#tariffs" />
              <Tab style={{ fontFamily: "Cera Pro" }} label="Support" href="#support" />
            </Tabs>
            <Link style={{ marginLeft: "auto" }} href="cabinet" target="_blank">
              <Button style={{ color: "#ffffff", border: "1px solid #ffffff", fontFamily: "Cera Pro" }} variant="outlined">Sign In</Button>
            </Link>
            <Link style={{ marginLeft: "10px" }} href="cabinet" target="_blank">
              <Button style={{ fontFamily: "Cera Pro" }} variant="contained">Sign up</Button>
            </Link>
          </>
        )}
        </Toolbar>
      </AppBar>
  );
}
export default Header;