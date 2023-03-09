import { AppBar, Toolbar, useTheme } from "@mui/material";

const drawerWidth = 200;

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: theme.palette.secondary.main,
      }}
    >
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
