import { SyntheticEvent, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const SignUp = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  //const { setActiveAuthForm } = useActions();

  const [formFields, setFormFields] = useState({
    name: "",
    nameValid: true,
    surname: "",
    surnameValid: true,
    email: "",
    emailValid: true,
    password: "",
    passwordValid: true,
    passwordConfirmation: "",
    passwordConfirmationValid: true,
    terms: false,
    termsValid: true,
  });

  const isValidEmail = (value: string) => {
    return value.includes("@") && value.includes(".") && value.length > 4;
  };

  const isNotEmptyField = (value: string) => {
    return value.length > 0;
  };

  const isValidPassword = (value: string) => {
    return value.length > 11;
  };

  const isValidConfirmPassword = (password: string, confirmPasword: string) => {
    return password === confirmPasword;
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [snackbar, setSnackbar] = useState<any>({
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (openSnackbar) {
      const timeoutId = setTimeout(() => {
        setOpenSnackbar(false);
      }, 15000);

      return () => clearTimeout(timeoutId);
    }
  }, [openSnackbar]);

  const submit = () => {
    if (
      isValidEmail(formFields.email) &&
      isNotEmptyField(formFields.name) &&
      isNotEmptyField(formFields.surname) &&
      isValidPassword(formFields.password) &&
      isValidConfirmPassword(
        formFields.password,
        formFields.passwordConfirmation
      ) &&
      formFields.terms
    ) {
      axios
        .post(
          `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/auth/register`,
          {
            name: formFields.name,
            surname: formFields.surname,
            username: formFields.email,
            email: formFields.email,
            password: formFields.password,
            role: "customer",
          },
          {
            withCredentials: true,
          }
        )
        .then((response: any) => {
          if (response.data.status === 200) {
            setFormFields({
              name: "",
              nameValid: true,
              surname: "",
              surnameValid: true,
              email: "",
              emailValid: true,
              password: "",
              passwordValid: true,
              passwordConfirmation: "",
              passwordConfirmationValid: true,
              terms: false,
              termsValid: true,
            });
            setSnackbar({
              message:
                "Successful registration! A message has been sent to your inbox containing a link to confirm the validity of your e-mail address and activate your account.",
              severity: "success",
            });
            setOpenSnackbar(true);
          }
          if (response.data.status === 401) {
            setSnackbar({
              message: "This e-mail already exist",
              severity: "error",
            });
            setOpenSnackbar(true);
          }
        });
    } else {
      setFormFields({
        name: formFields.name,
        nameValid: isNotEmptyField(formFields.name),
        surname: formFields.surname,
        surnameValid: isNotEmptyField(formFields.surname),
        email: formFields.email,
        emailValid: isValidEmail(formFields.email),
        password: formFields.password,
        passwordValid: isValidPassword(formFields.password),
        passwordConfirmation: formFields.passwordConfirmation,
        passwordConfirmationValid: isValidConfirmPassword(
          formFields.password,
          formFields.passwordConfirmation
        ),
        terms: formFields.terms,
        termsValid: formFields.terms === true,
      });
    }
  };

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <Typography sx={{ fontWeight: "600" }}>Sign up</Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <FormControl sx={{ minWidth: 120, width: 300 }} size="medium">
          <TextField
            required
            placeholder={"name"}
            label={"name"}
            error={!formFields.nameValid}
            helperText={!formFields.nameValid ? "Required field" : ""}
            value={formFields.name}
            autoComplete="off"
            onChange={(event) => {
              setFormFields({ ...formFields, name: event.target.value });
            }}
            sx={{ width: "300px" }}
          />
        </FormControl>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"surname"}
          label={"surname"}
          error={!formFields.surnameValid}
          helperText={!formFields.surnameValid ? "Required field" : ""}
          value={formFields.surname}
          autoComplete="off"
          onChange={(event) => {
            setFormFields({ ...formFields, surname: event.target.value });
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"email"}
          label={"email"}
          error={!formFields.emailValid}
          helperText={
            !formFields.emailValid
              ? "Email is not correct. Example: example@email.com"
              : ""
          }
          value={formFields.email}
          autoComplete="off"
          onChange={(event) => {
            setFormFields({ ...formFields, email: event.target.value });
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"password"}
          type={showPassword ? "text" : "password"}
          label={"password"}
          error={!formFields.passwordValid}
          helperText={
            !formFields.passwordValid
              ? "Password is not correct. Min of 12 symbols with using special character"
              : ""
          }
          autoComplete="off"
          value={formFields.password}
          onChange={(event) => {
            setFormFields({ ...formFields, password: event.target.value });
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
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"password confirmation"}
          type={"password"}
          label={"confirm password"}
          error={
            !formFields.passwordConfirmationValid || !formFields.passwordValid
          }
          helperText={
            !formFields.passwordConfirmationValid
              ? "Does not match the password"
              : ""
          }
          autoComplete="off"
          value={formFields.passwordConfirmation}
          onChange={(event) => {
            setFormFields({
              ...formFields,
              passwordConfirmation: event.target.value,
            });
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box
        sx={{
          pb: "10px",
          pl: "10px",
        }}
      >
        <FormControl sx={{ minWidth: 120, width: 300 }} size="medium">
          <FormControlLabel
            control={
              <Checkbox
                required
                name="lgpd_agreement"
                checked={formFields.terms}
                onChange={(event) => {
                  setFormFields({ ...formFields, terms: event.target.checked });
                }}
              />
            }
            label={
              <Link
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.info.main,
                  },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Terms!");
                }}
              >
                By signing up, you agree to our terms of service and privacy
                policy
              </Link>
            }
          />
          {!formFields.termsValid && (
            <FormHelperText error>Required field</FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ py: "15px" }}>
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

      <Snackbar
        sx={{ width: 500 }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUp;
