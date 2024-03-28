import {
  Box,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navigation = [
  {
    title: "Navigation",
    items: [
      {
        name: "Analyse contract",
        href: "#analyse-contract",
        target: "",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Tariffs",
        href: "#tariffs",
        target: "",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Support",
        href: "#support",
        target: "",
        color: "secondary.main",
        pt: "0",
        pb: "20px",
      },
    ],
    color: "secondary.dark",
  },
  {
    title: "Legal",
    items: [
      {
        name: "Terms & Conditions",
        href: "#",
        target: "",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Privacy policy",
        href: "#",
        target: "",
        color: "secondary.main",
        pt: "0",
        pb: "20px",
      },
    ],
    color: "secondary.dark",
  },
  {
    title: "Social",
    items: [
      {
        name: <TelegramIcon/>,
        href: "https://telegram.org/",
        target: "_blank",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: <InstagramIcon/>,
        href: "https://www.instagram.com/",
        target: "_blank",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: <LinkedInIcon/>,
        href: "https://www.linkedin.com/login/",
        target: "_blank",
        color: "secondary.main",
        pt: "0",
        pb: "20px",
      },
    ],
    color: "secondary.dark",
  },
];

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
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
              maxWidth: "1300px",
              width: "inherit",
            }}
          >
            <Toolbar
              sx={{
                display: isMatch ? "grid" : "flex",
                alignItems: "center",
              }}
            >
              <Box component="div" sx={{ mr: "auto" }}>
                <Box
                  component="img"
                  src={"static/images/logo.png"}
                  alt="logo"
                  sx={{ width: "160px" }}
                />
                <Typography sx={{ color: theme.palette.secondary.main }}>
                  © 2023-{new Date().getFullYear()}, A-contract. All Rights Reserved.
                </Typography>
              </Box>
              <Box component="div" sx={{ display: isMatch ? "grid" : "flex" }}>
                {navigation.map((value, index) => (
                  <Box component="div" key={index} sx={{ pl: isMatch ? "" : "30px" }}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                color: value.color,
                                letterSpacing: "0.7px",
                                fontSize: "18px",
                              }}
                            >
                              {value.title}
                            </Typography>
                          }
                        ></ListItemText>
                      </ListItem>
                      {value.items.map((valueItem, indexItem) => (
                        <ListItem
                          component="a"
                          href={valueItem.href}
                          target={valueItem.target}
                          key={indexItem}
                        >
                          <ListItemText
                            primary={
                              <Typography sx={{ color: valueItem.color }}>
                                {valueItem.name}
                              </Typography>
                            }
                          ></ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </Box>
        </Box>
    </>
  );
};

export default Footer;
