import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Tariffs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box component="div" id={"tariffs"} sx={{ pt: "60px", pb: "60px" }}>
        <Container component="div" sx={{}}>
          <Box component="div" sx={{ mx: "auto", mb: 5 }}>
            <Box sx={{ mx: "10px" }}>
              <Typography
                component="h2"
                variant="h4"
                align="left"
                fontWeight="600"
                pb="10px"
                color={theme.palette.primary.dark}
                gutterBottom
              >
                Tarrifs
              </Typography>
            </Box>

            <Box
              sx={{
                display: isMatch ? "grid" : "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: 400,
                  width: 300,
                  mx: isMatch ? "" : "50px",
                  my: isMatch ? 2 : 0,
                }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/static/images/standart_pricing.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Standard Pricing
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      €10/1800 characters
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ maxWidth: 400, width: 300 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/static/images/legal_person.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Legal Person
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      €30/1800 characters
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <Box>
            <List sx={{ fontSize: "20px" }}>
              <ListItem>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: theme.palette.primary.dark,
                  }}
                >
                  •
                </ListItemIcon>
                <Typography variant="h6">
                  The price of analysis is determined by the length of the text,
                  i.e. number of characters.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: theme.palette.primary.dark,
                  }}
                >
                  •
                </ListItemIcon>
                <Typography variant="h6">
                  One analysis page contains 1800 characters, including spaces.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: theme.palette.primary.dark,
                  }}
                >
                  •
                </ListItemIcon>
                <Typography variant="h6">
                  The number of characters corresponds to a standard typewritten
                  page with 30 lines of text.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: theme.palette.primary.dark,
                  }}
                >
                  •
                </ListItemIcon>
                <Typography variant="h6">
                  The text is printed at intervals of 1.5, each line contains 60
                  characters.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Tariffs;
