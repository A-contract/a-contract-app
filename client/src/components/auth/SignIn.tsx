import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const SignIn = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <Typography sx={{ fontWeight: "600" }}>Sign In</Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          placeholder={"email"}
          label={"email"}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "25px" }}>
        <TextField
          placeholder={"password"}
          label={"password"}
          type={"password"}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box component={Link} href="cabinet" sx={{ pb: "25px" }}>
        <Button
          variant="outlined"
          //   disableRipple
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.info.main,
            borderColor: theme.palette.info.main,
            width: "300px",
          }}
        >
          Sign in
        </Button>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Typography sx={{ width: "300px", textAlign: "center" }}>
          Don't remember your password?
        </Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Typography sx={{ width: "300px", textAlign: "center" }}>
          Don't have an account? Sign up{" "}
        </Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Typography sx={{ width: "300px", textAlign: "center" }}>
          Continue with google{" "}
        </Typography>
      </Box>
    </>
  );
};

export default SignIn;
