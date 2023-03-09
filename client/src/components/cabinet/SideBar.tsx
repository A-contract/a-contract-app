import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Link from "next/link";

const drawerWidth = 200;

const SideBar = () => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        minWidth: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "inherit",
          boxSizing: "border-box",
          bgcolor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography sx={{ mx: "auto" }}>A-contract</Typography>
      </Toolbar>
      <List>
        {["Contracts", "Support", "Setting"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ mx: "auto" }}>
                <InboxIcon sx={{ bgcolor: theme.palette.secondary.main }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Box component={Link} href="auth">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon sx={{ bgcolor: theme.palette.secondary.main }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </Drawer>
  );
};

export default SideBar;
