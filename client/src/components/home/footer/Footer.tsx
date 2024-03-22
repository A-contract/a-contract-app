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

const navigation = [
  {
    title: "Navigation",
    items: [
      {
        name: "Analyse contract",
        href: "#analyse-contract",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Tariffs",
        href: "#tariffs",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Support",
        href: "#support",
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
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Privacy policy",
        href: "#",
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
        name: "Telegram",
        href: "#",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "Instagram",
        href: "#",
        color: "secondary.main",
        pt: "0",
        pb: "0",
      },
      {
        name: "LinkedIn",
        href: "#",
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
      {isMatch ? (
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
              width: "inherit",
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  mb: "20px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={"/static/images/logo.png"}
                  alt="logo"
                  sx={{ width: "160px" }}
                />
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    textAlign: "center",
                  }}
                >
                  © 2023, A-contract. All Rights Reserved.
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {navigation.map((value, index) => (
                  <Box component="div" key={index}>
                    <List>
                      <ListItem sx={{ pb: "0" }}>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                color: value.color,
                                letterSpacing: "0.7px",
                                fontSize: "18px",
                                textAlign: "center",
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
                          key={indexItem}
                          sx={{ pb: valueItem.pb, pt: valueItem.pt }}
                        >
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  color: valueItem.color,
                                  textAlign: "center",
                                }}
                              >
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
      ) : (
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
                display: "flex",
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
                  © 2023, A-contract. All Rights Reserved.
                </Typography>
              </Box>
              <Box component="div" sx={{ display: "flex" }}>
                {navigation.map((value, index) => (
                  <Box component="div" key={index} sx={{ pl: "30px" }}>
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
      )}
    </>
  );
};

export default Footer;
