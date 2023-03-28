import { AppBar, Toolbar, useTheme } from "@mui/material";

const drawerWidth = 200;

const Header = (props: any) => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
      }}
    >
      <Toolbar>{props.user.name}</Toolbar>
    </AppBar>
  );
};

export default Header;
