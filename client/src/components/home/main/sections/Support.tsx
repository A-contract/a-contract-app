import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
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

const Support = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMatch ? (
        <Box component="div" id={"support"} sx={{ pt: "80px" }}>
          <Container component="div" sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              component="div"
              sx={{ maxWidth: "530px", alignItems: "center" }}
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
                Support
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  height: "500px",
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
      ) : (
        <Box component="div" id={"support"} sx={{ pt: "120px" }}>
          <Container component="div" sx={{ display: "flex", flexWrap: "wrap" }}>
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
      )}
    </>
  );
};

export default Support;
