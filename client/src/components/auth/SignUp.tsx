import { SyntheticEvent, useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useActions } from "@/hooks/useAction";

const SignUp = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const { setActiveAuthForm } = useActions();
  const [validEmail, setValidEmail] = useState({
    value: "",
    isValid: true,
  });
  const [validPassword, setValidPassword] = useState({
    value: "",
    isValid: true,
  });

  const isValidEmail = (value: string) => {
    return value.includes("@") && value.includes(".") && value.length > 4;
  };

  const isValidPassword = (value: string) => {
    return value.length > 9;
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const typesNotifications = [
    {
      id: 0,
      severity: "error" as const,
      textNotification: "This e-mail already exists",
    },
    {
      id: 1,
      severity: "success" as const,
      textNotification: "User successfully registered",
    },
  ];

  const [typeNot, setTypeNot] = useState(typesNotifications[0]);

  const submit = () => {
    const email = validEmail.value;
    const password = validPassword.value;
    if (isValidEmail(email) && isValidPassword(password)) {
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
          if (response.data.status === 202) {
            setTypeNot(typesNotifications[1]);
            setOpenSnackbar(true);
            setActiveAuthForm(0);
            console.log(typeNot);
          }
          if (response.data.status === 401) {
            setTypeNot(typesNotifications[0]);
            setOpenSnackbar(true);
            console.log(typeNot);
          }
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
        <Typography sx={{ fontWeight: "600" }}>Sign up</Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"email"}
          label={"email"}
          error={!validEmail.isValid}
          helperText={
            !validEmail.isValid
              ? "Email is not correct. Example: example@email.com"
              : ""
          }
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
          type={showPassword ? "text" : "password"}
          label={"password"}
          error={!validPassword.isValid}
          helperText={
            !validPassword.isValid
              ? "Password is not correct. Min of 10 symbols with using special character"
              : "Min of 10 symbols with using special character"
          }
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
          sx={{ width: "300px" }}
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
        <>
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={typeNot.severity}
          >
            {typeNot.textNotification}
          </Alert>
        </>
      </Snackbar>
      {/* <Box sx={{ pb: "10px" }}>
        <Typography sx={{ width: "300px", textAlign: "center" }}>
          Continue with google{" "}
        </Typography>
      </Box> */}
    </>
  );
};

export default SignUp;
