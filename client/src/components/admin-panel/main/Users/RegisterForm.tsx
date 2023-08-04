import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import theme from "utils/theme";
import { useEffect, useRef, useState } from "react";
import generatePassword from "password-generator";
import axios from "axios";

const RegisterForm = (props: any) => {
  const [formFields, setFormFields] = useState({
    role: "",
    roleValid: true,
    name: "",
    nameValid: true,
    surname: "",
    surnameValid: true,
    email: "",
    emailValid: true,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [snackbar, setSnackbar] = useState<any>({
    message: "",
    severity: "success",
  });

  const isValidEmail = (value: string) => {
    return value.includes("@") && value.includes(".") && value.length > 4;
  };

  const isNotEmptyField = (value: string) => {
    return value.length > 0;
  };

  const registerUser = () => {
    if (
      isValidEmail(formFields.email) &&
      isNotEmptyField(formFields.name) &&
      isNotEmptyField(formFields.surname) &&
      isNotEmptyField(formFields.role)
    ) {
      axios
        .post(
          "http://localhost:8000/auth/register",
          {
            name: formFields.name,
            surname: formFields.surname,
            username: formFields.email,
            email: formFields.email,
            password: generatePassword(12, false),
            role: formFields.role,
          },
          {
            withCredentials: true,
          }
        )
        .then((response: any) => {
          if (response.data.status === 200) {
            setFormFields({
              role: "",
              roleValid: true,
              name: "",
              nameValid: true,
              surname: "",
              surnameValid: true,
              email: "",
              emailValid: true,
            });
            setSnackbar({
              message: "Successful registration",
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
        role: formFields.role,
        roleValid: isNotEmptyField(formFields.role),
        name: formFields.name,
        nameValid: isNotEmptyField(formFields.name),
        surname: formFields.surname,
        surnameValid: isNotEmptyField(formFields.surname),
        email: formFields.email,
        emailValid: isValidEmail(formFields.email),
      });
    }
  };

  useEffect(() => {
    if (openSnackbar) {
      const timeoutId = setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [openSnackbar]);

  return (
    <>
      <Box sx={{ width: "440px", minWidth: "300px", pr: "7.5px" }}>
        <Paper sx={{ p: "20px" }}>
          <Box sx={{ pb: "30px" }}>
            <Typography>Add user</Typography>
          </Box>
          <Box sx={{ pb: "12px" }}>
            <FormControl sx={{ minWidth: 120, width: 300 }} size="medium">
              <InputLabel id="demo-select-small-label">Role</InputLabel>
              <Select
                required
                value={formFields.role}
                error={!formFields.roleValid}
                placeholder={!formFields.roleValid ? "Required field" : ""}
                label="Role"
                onChange={(event) => {
                  setFormFields({ ...formFields, role: event.target.value });
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"lawyer"}>Lawyer</MenuItem>
              </Select>
              {!formFields.roleValid && (
                <FormHelperText error>Required field</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box sx={{ pb: "12px" }}>
            <FormControl sx={{ minWidth: 120, width: 300 }} size="medium">
              <TextField
                required
                placeholder={"name"}
                label={"name"}
                error={!formFields.nameValid}
                helperText={!formFields.nameValid ? "Required field" : ""}
                value={formFields.name}
                onChange={(event) => {
                  setFormFields({ ...formFields, name: event.target.value });
                }}
                sx={{ width: "300px" }}
              />
            </FormControl>
          </Box>
          <Box sx={{ pb: "12px" }}>
            <TextField
              required
              placeholder={"surname"}
              label={"surname"}
              error={!formFields.surnameValid}
              helperText={!formFields.surnameValid ? "Required field" : ""}
              value={formFields.surname}
              onChange={(event) => {
                setFormFields({ ...formFields, surname: event.target.value });
              }}
              sx={{ width: "300px" }}
            />
          </Box>
          <Box sx={{ pb: "12px" }}>
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
              onChange={(event) => {
                setFormFields({ ...formFields, email: event.target.value });
              }}
              sx={{ width: "300px" }}
            />
          </Box>

          <Box sx={{ pb: "25px" }}>
            <Button
              variant="outlined"
              onClick={() => {
                registerUser();
              }}
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
              Register
            </Button>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
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

export default RegisterForm;
