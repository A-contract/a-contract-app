import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import theme from "utils/theme";
import Router from "next/router";

const ActivationPage = () => {
  const [validToken, setValidToken] = useState(false);
  const router = useRouter();
  const token = router.query.token;

  useEffect(() => {
    if (!router.asPath.includes("/activation-page?token=")) {
      console.log("invalidToken1");
      Router.replace("/404");
    }
    if (token) {
      axios
        .get(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/auth/activate/` + token)
        .then((response: any) => {
          console.log(response.data);
          if (response.data.status === 400) {
            console.log("invalidToken2");

            Router.replace("/404");
          } else {
            setValidToken(true);
          }
        });
    }
  }, [token]);

  return (
    <>
      {validToken ? (
        <Box
          sx={{
            mx: "auto",
            mt: "10px",
            width: "500px",
            maxWidth: "500px",
            borderRadius: "5px",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              component={Link}
              href="/"
              sx={{
                bgcolor: theme.palette.primary.main,
                width: "-webkit-fill-available",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px 5px 0 0",
                mb: "5px",
              }}
            >
              <Box>
                <Box
                  component="img"
                  src={"/images/logo.png"}
                  alt="logo"
                  sx={{
                    width: "160px",
                    borderRadius: "5px",
                    p: "10px",
                    mx: "auto",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ p: "25px" }}>
              <Typography sx={{ fontWeight: "600" }}>
                Your account has been successfully activated!
              </Typography>
            </Box>
            <Box sx={{ pb: "25px" }}>
              <Button
                variant="outlined"
                component={Link}
                href="auth"
                sx={{
                  bgcolor: theme.palette.info.light,
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.info.main,
                  width: "250px",
                  "&:hover": {
                    bgcolor: theme.palette.info.main,
                    borderColor: theme.palette.info.main,
                  },
                }}
              >
                Go to Auth
              </Button>
            </Box>
          </Paper>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActivationPage;
