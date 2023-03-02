import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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

const Tariffs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMatch ? (
        <Box component="div" id={"tariffs"} sx={{ pt: "80px" }}>
          <Container component="div" sx={{ display: "flex", flexWrap: "wrap" }}>
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
                align="center"
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
                  width: isMatch ? "358px" : "530px",
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
                <Box component="div" sx={{ mb: "10px", width: "280px" }}></Box>
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
                The analysis price is determined by the length of the text, i.e.
                the number of characters, according to which one page of
                analysis contains 1800 characters, including spaces (characters
                include letters, numbers and punctuation marks). This figure
                corresponds to a standard typewritten page with 30 lines of text
                printed at 1.5 line spacing, each line containing 60 characters.
                Therefore, each page (1800 characters) costs €10 for a natural
                person and €30 for a legal person. All the above amounts are
                inclusive of VAT.
              </Typography>
            </Box>
          </Container>
        </Box>
      ) : (
        <Box component="div" id={"tariffs"} sx={{ pt: "120px" }}>
          <Container component="div" sx={{ display: "flex", flexWrap: "wrap" }}>
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
                The analysis price is determined by the length of the text, i.e.
                the number of characters, according to which one page of
                analysis contains 1800 characters, including spaces (characters
                include letters, numbers and punctuation marks). This figure
                corresponds to a standard typewritten page with 30 lines of text
                printed at 1.5 line spacing, each line containing 60 characters.
                Therefore, each page (1800 characters) costs €10 for a natural
                person and €30 for a legal person. All the above amounts are
                inclusive of VAT.
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
                <Box component="div" sx={{ mb: "10px", width: "280px" }}></Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Tariffs;
