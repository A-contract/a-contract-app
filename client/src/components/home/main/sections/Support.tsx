import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Support = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [textSnackbar, setTextSnackbar] = useState("");
  const [isError, setError] = useState(false);

  const isValidEmail = (value: string) => {
    const result =
      value.includes("@") && value.includes(".") && value.length > 4;
    if (!result) {
      setTextSnackbar("Wrong format of email!");
      setError(true);
    }
    return result;
  };

  const isValidQuestion = (value: string) => {
    const result = value.length > 0;
    if (!result) {
      setTextSnackbar("Wrong format of question!");
      setError(true);
    }
    return result;
  };

  const setQuestionReq = () => {
    console.log(question, email);
    if (isValidQuestion(question) && isValidEmail(email)) {
      axios
        .post(
          `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/support/setQuestion`,
          {
            email: email,
            question: question,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response.data.status);
        });
      setError(false);
      setTextSnackbar("Your question sent!");
      setEmail("");
      setQuestion("");
    }
    setOpenSnackbar(true);
  };

  return (
    <>
      <Box component="div" id={"support"} sx={{ pt: "60px" }}>
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
              Support
            </Typography>
            <Typography
              variant="h6"
              align="left"
              textAlign="justify"
              color={theme.palette.primary.dark}
              paragraph
            >
              Our team of dedicated support professionals is available to assist
              you with technical troubleshooting, account-related inquiries,
              billing questions, and any other concerns you may have.
            </Typography>
            <Typography
              variant="h6"
              align="left"
              textAlign="justify"
              color={theme.palette.primary.dark}
              paragraph
            >
              We understand that every customer is unique, and we strive to
              provide personalized solutions that meet your specific needs.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "530px",
              mx: "10px",
              ml: isMatch ? "0" : "100px",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                height: "450px",
                width: isMatch ? "350px" : "400px",
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  value={question}
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
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
                    bgcolor: theme.palette.info.light,
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.info.main,
                    width: "320px",
                    "&:hover": {
                      bgcolor: theme.palette.info.main,
                      borderColor: theme.palette.info.main,
                    },
                  }}
                  onClick={() => {
                    setQuestionReq();
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          sx={{
            left: "auto !important",
            right: "auto !important",
            bottom: "20% !important",
          }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={isError ? "error" : "success"}
          >
            {textSnackbar}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Support;
