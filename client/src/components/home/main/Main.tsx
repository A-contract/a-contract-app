import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";

const analyse = {
  name: "Analyse contract",
  items: [
    {
      icon: "•",
      text: "names of the parties;",
    },
    {
      icon: "•",
      text: "subject of the contact;",
    },
    {
      icon: "•",
      text: "payment procedure(Fees);",
    },
    {
      icon: "•",
      text: "the term of the contract;",
    },
    {
      icon: "•",
      text: "the procedure for termination of the contract;",
    },
    {
      icon: "•",
      text: "procedure for resolving disputes;",
    },
    {
      icon: "•",
      text: "confidentiality;",
    },
    {
      icon: "•",
      text: "the pitfalls of the contract;",
    },
  ],
};

const Main = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        pb: "80px",
        pt: "0",
      }}
    >
      {isMatch ? (
        <>
          <Box component="div" id={"analyse-contract"} sx={{ pt: "120px" }}>
            <Container
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Box
                component="div"
                sx={{
                  maxWidth: "530px",
                  mx: "10px",
                  ml: isMatch ? "0" : "20px",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  fontWeight="600"
                  pb="10px"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Analyse contract
                </Typography>
                <Paper
                  variant="outlined"
                  sx={{
                    height: "500px",
                    width: isMatch ? "350px" : "530px",
                    borderColor: theme.palette.info.dark,
                    bgcolor: "#f9f9f9",
                    px: "30px",
                    py: "20px",
                    my: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" sx={{ mb: "10px" }}>
                    <Box component="h4">Your info</Box>
                  </Box>
                  <Box component="div" sx={{ mb: "10px" }}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: "280px",
                      }}
                    />
                  </Box>
                  <Box sx={{ mb: "20px", width: "280px" }}>
                    <Box
                      component={DropzoneArea}
                      acceptedFiles={[".doc", ".docx,", ".pdf"]}
                      dropzoneText={"Attach your contract"}
                      onChange={(files) => console.log("Files:", files)}
                    />
                  </Box>

                  <Box sx={{ mb: "10px" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.info.main,
                        borderColor: theme.palette.info.main,
                        width: "280px",
                      }}
                    >
                      Analyse
                    </Button>
                  </Box>
                  <Box sx={{ mb: "10px" }}>
                    <Typography
                      sx={{
                        width: "280px",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      By signing up, you agree to our terms of service and
                      privacy policy
                    </Typography>
                  </Box>
                </Paper>
              </Box>
              <Box
                component="div"
                sx={{
                  maxWidth: "530px",
                  mx: "10px",
                  alignItems: "center",
                  my: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  align="left"
                  textAlign="justify"
                  color={theme.palette.primary.dark}
                  paragraph
                >
                  Analysis of the contract – is our service, which will provide
                  you with the opportunity to save your time, needed to study
                  contract.
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  py="2px"
                  my="2px"
                  color={theme.palette.primary.dark}
                  paragraph
                >
                  Service identify key clauses of contract such as:
                </Typography>
                <List sx={{ fontSize: "20px" }}>
                  {analyse.items.map((value, index) => (
                    <ListItem key={index} sx={{ py: "0" }}>
                      <ListItemIcon
                        sx={{
                          minWidth: "20px",
                          color: theme.palette.primary.dark,
                        }}
                      >
                        {value.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: "18px",
                              color: theme.palette.primary.dark,
                            }}
                          >
                            {value.text}
                          </Typography>
                        }
                      ></ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Container>
          </Box>
          <Box component="div" id={"tariffs"} sx={{ pt: "80px" }}>
            <Container
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Box
                component="div"
                sx={{
                  maxWidth: "530px",
                  mx: "10px",
                  ml: isMatch ? "0" : "20px",
                  alignItems: "center",
                }}
              >
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
                <Paper
                  variant="outlined"
                  sx={{
                    height: "400px",
                    width: isMatch ? "350px" : "530px",
                    borderColor: theme.palette.info.dark,
                    bgcolor: "#f9f9f9",
                    px: "30px",
                    py: "20px",
                    my: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" sx={{ mb: "10px" }}>
                    <Box component="h4">Tariff</Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{ mb: "10px", width: "280px" }}
                  ></Box>
                </Paper>
              </Box>
              <Box
                component="div"
                sx={{
                  maxWidth: "530px",
                  mx: "10px",
                  alignItems: "center",
                  my: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  align="left"
                  color={theme.palette.primary.dark}
                  textAlign="justify"
                  paragraph
                >
                  The analysis price is determined by the length of the text,
                  i.e. the number of characters, according to which one page of
                  analysis contains 1800 characters, including spaces
                  (characters include letters, numbers and punctuation marks).
                  This figure corresponds to a standard typewritten page with 30
                  lines of text printed at 1.5 line spacing, each line
                  containing 60 characters. Therefore, each page (1800
                  characters) costs €10 for a natural person and €30 for a legal
                  person. All the above amounts are inclusive of VAT.
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box component="div" id={"support"} sx={{ pt: "80px" }}>
            <Container
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Box
                component="div"
                sx={{ maxWidth: "530px", alignItems: "center" }}
              >
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  fontWeight="600"
                  pb="10px"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Support
                </Typography>
                <Paper
                  variant="outlined"
                  sx={{
                    height: "500px",
                    width: isMatch ? "350px" : "530px",
                    borderColor: theme.palette.info.dark,
                    bgcolor: "#f9f9f9",
                    px: "30px",
                    py: "20px",
                    my: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" sx={{ mb: "10px" }}>
                    <Box component="h4">Your question</Box>
                  </Box>
                  <Box component="div" sx={{ mb: "10px" }}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: "280px",
                      }}
                    />
                  </Box>
                  <Box component="div" sx={{ mb: "10px" }}>
                    <TextField
                      placeholder="Write your question..."
                      multiline
                      rows={8}
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: "280px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.info.main,
                        borderColor: theme.palette.info.main,
                        width: "280px",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Container>
          </Box>
        </>
      ) : (
        <>
          <Box component="div" id={"analyse-contract"} sx={{ pt: "120px" }}>
            <Container
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Box
                component="div"
                sx={{ maxWidth: "530px", mx: "10px", alignItems: "center" }}
              >
                <Typography
                  component="h2"
                  variant="h4"
                  fontWeight="600"
                  align="left"
                  pb="10px"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Analyse contract
                </Typography>

                <Typography
                  variant="h6"
                  align="left"
                  textAlign="justify"
                  color={theme.palette.primary.dark}
                  paragraph
                >
                  Analysis of the contract – is our service, which will provide
                  you with the opportunity to save your time, needed to study
                  contract.
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  py="2px"
                  my="2px"
                  color={theme.palette.primary.dark}
                  paragraph
                >
                  Service identify key clauses of contract such as:
                </Typography>
                <List sx={{ fontSize: "20px" }}>
                  {analyse.items.map((value, index) => (
                    <ListItem key={index} sx={{ py: "0" }}>
                      <ListItemIcon
                        sx={{
                          minWidth: "20px",
                          color: theme.palette.primary.dark,
                        }}
                      >
                        {value.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: "18px",
                              color: theme.palette.primary.dark,
                            }}
                          >
                            {value.text}
                          </Typography>
                        }
                      ></ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box
                component="div"
                sx={{
                  maxWidth: "550px",
                  mx: "10px",
                  ml: isMatch ? "0" : "20px",
                  alignItems: "center",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    height: "500px",
                    width: isMatch ? "350px" : "530px",
                    borderColor: theme.palette.info.dark,
                    bgcolor: "#f9f9f9",
                    px: "30px",
                    py: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" sx={{ mb: "10px" }}>
                    <Box component="h4">Your info</Box>
                  </Box>
                  <Box component="div" sx={{ mb: "10px" }}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: "320px",
                      }}
                    />
                  </Box>
                  <Box sx={{ mb: "20px", width: "320px" }}>
                    <Box
                      component={DropzoneArea}
                      acceptedFiles={[".doc", ".docx,", ".pdf"]}
                      dropzoneText={"Attach your contract"}
                      onChange={(files) => console.log("Files:", files)}
                    />
                  </Box>

                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.info.main,
                        borderColor: theme.palette.info.main,
                        width: "320px",
                        mb: "10px",
                      }}
                    >
                      Analyse
                    </Button>
                  </Box>
                  <Box sx={{ mb: "10px" }}>
                    <Typography
                      sx={{
                        width: "320px",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      By signing up, you agree to our terms of service and
                      privacy policy
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Container>
          </Box>
          <Box component="div" id={"tariffs"} sx={{ pt: "120px" }}>
            <Container
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Box
                component="div"
                sx={{ maxWidth: "530px", mx: "10px", alignItems: "center" }}
              >
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

                <Typography
                  variant="h6"
                  align="left"
                  textAlign="justify"
                  color={theme.palette.primary.dark}
                  paragraph
                >
                  The analysis price is determined by the length of the text,
                  i.e. the number of characters, according to which one page of
                  analysis contains 1800 characters, including spaces
                  (characters include letters, numbers and punctuation marks).
                  This figure corresponds to a standard typewritten page with 30
                  lines of text printed at 1.5 line spacing, each line
                  containing 60 characters. Therefore, each page (1800
                  characters) costs €10 for a natural person and €30 for a legal
                  person. All the above amounts are inclusive of VAT.
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  maxWidth: "530px",
                  mx: "10px",
                  ml: isMatch ? "0" : "20px",
                  alignItems: "center",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    height: "400px",
                    width: isMatch ? "350px" : "530px",
                    borderColor: theme.palette.info.dark,
                    bgcolor: "#f9f9f9",
                    px: "30px",
                    py: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" sx={{ mb: "10px" }}>
                    <Box component="h4">Tariff</Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{ mb: "10px", width: "280px" }}
                  ></Box>
                </Paper>
              </Box>
            </Container>
          </Box>
          <Box component="div" id={"support"} sx={{ pt: "120px" }}>
            <Container
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Box
                component="div"
                sx={{ maxWidth: "530px", alignItems: "center" }}
              >
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  fontWeight="600"
                  pb="10px"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Support
                </Typography>
                <Paper
                  variant="outlined"
                  sx={{
                    height: "420px",
                    width: isMatch ? "350px" : "530px",
                    borderColor: theme.palette.info.dark,
                    bgcolor: "#f9f9f9",
                    px: "30px",
                    py: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" sx={{ mb: "10px" }}>
                    <Box component="h4">Your question</Box>
                  </Box>
                  <Box component="div" sx={{ mb: "10px" }}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: "320px",
                      }}
                    />
                  </Box>
                  <Box component="div" sx={{ mb: "10px" }}>
                    <TextField
                      placeholder="Write your question..."
                      multiline
                      rows={8}
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: "320px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.info.main,
                        borderColor: theme.palette.info.main,
                        width: "320px",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Main;
