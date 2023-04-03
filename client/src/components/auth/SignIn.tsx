import { useActions } from "@/hooks/useAction";
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const { setActiveAuthForm } = useActions();
  const router = useRouter();
  const [validEmail, setValidEmail] = useState({
    value: "",
    isValid: true,
  });
  const [validPassword, setValidPassword] = useState({
    value: "",
    isValid: true,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const isValidEmail = (value: string) => {
    return value.includes("@") && value.includes(".") && value.length > 4;
  };

  const isValidPassword = (value: string) => {
    return value.length > 0;
  };

  const submit = () => {
    const email = validEmail.value;
    const password = validPassword.value;
    if (isValidEmail(email) && isValidPassword(password)) {
      axios
        .post(
          "http://localhost:8000/api/login",
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          }
        )
        .then(function (response: any) {
          console.log(response.data.status);
          if (response.data.status === 202) router.push("/cabinet");
          if (response.data.status === 401) setOpenSnackbar(true);
        });
    } else {
      setValidEmail({
        value: email,
        isValid: isValidEmail(email),
      });
      setValidPassword({
        value: password,
        isValid: isValidPassword(password),
      });
    }
  };

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <Typography sx={{ fontWeight: "600" }}>Sign In</Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"email"}
          label={"email"}
          error={!validEmail.isValid}
          helperText={!validEmail.isValid ? "Email is not correct" : ""}
          onChange={(event) => {
            setValidEmail({
              value: event.target.value,
              isValid: true,
            });
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "25px" }}>
        <TextField
          required
          placeholder={"password"}
          label={"password"}
          type={showPassword ? "text" : "password"}
          sx={{ width: "300px" }}
          error={!validPassword.isValid}
          helperText={!validPassword.isValid ? "Password is not correct" : ""}
          onChange={(event) => {
            setValidPassword({
              value: event.target.value,
              isValid: true,
            });
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
        />
      </Box>
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
          Sign in
        </Button>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Link href={"#"}>
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
            Don't remember your password?
          </Typography>
        </Link>
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
          onClick={() => setActiveAuthForm(1)}
        >
          Don't have an account? Sign up{" "}
        </Typography>
      </Box>
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
        <Alert onClose={() => setOpenSnackbar(false)} severity="error">
          Wrong login or password
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignIn;
