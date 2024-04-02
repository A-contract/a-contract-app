import { AppBar, Toolbar, useTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      <Toolbar sx={{ ml: "auto" }}>
        {props.user.name} {props.user.surname}
        <AccountCircleIcon
          sx={{ fontSize: "40px", ml: 1, color: "#cbcbcb" }}
        ></AccountCircleIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
