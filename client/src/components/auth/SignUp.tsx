import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import Link from "next/link";

const SignUp = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <Typography sx={{ fontWeight: "600" }}>Sign up</Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"email"}
          label={"email"}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "25px" }}>
        <TextField
          required
          helperText="Min of 10 symbols with using special character"
          placeholder={"password"}
          label={"password"}
          type={"password"}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box component={Link} href="#" sx={{ pb: "25px" }}>
        <Button
          variant="outlined"
          sx={{
            bgcolor: theme.palette.info.light,
            color: theme.palette.secondary.main,
            borderColor: theme.palette.info.main,
            width: "300px",
            "&:hover": {
              bgcolor: theme.palette.info.main,
              borderColor: theme.palette.info.main,
            },
          }}
        >
          Sign up
        </Button>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Typography
          sx={{
            width: "300px",
            textAlign: "center",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.info.main,
            },
          }}
        >
          By signing up, you agree to our terms of service and privacy policy
        </Typography>
      </Box>
      {/* <Box sx={{ pb: "10px" }}>
        <Typography sx={{ width: "300px", textAlign: "center" }}>
          Continue with google{" "}
        </Typography>
      </Box> */}
    </>
  );
};

export default SignUp;
