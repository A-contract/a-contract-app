import { SyntheticEvent, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/useAction";

const SignUp = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setActiveAuthForm } = useActions();

  const submit = () => {
    axios
      .post(
        "http://localhost:8000/api/register",
        {
          name: email.split("@")[0],
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response: any) {
        console.log(response.data.status);
        if (response.data.status === 202) setActiveAuthForm(0);
        if (response.data.status === 401)
          console.log("Wrong email or password");
      });
  };

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
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "25px" }}>
        <TextField
          required
          helperText="Min of 10 symbols with using special character"
          placeholder={"password"}
          type={showPassword ? "text" : "password"}
          label={"password"}
          onChange={(event: any) => {
            setPassword(event.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      {/* component={Link} href="#" */}
      <Box sx={{ pb: "25px" }}>
        <Button
          variant="outlined"
          onClick={submit}
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
