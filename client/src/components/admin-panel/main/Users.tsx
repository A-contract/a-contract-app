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
import { useEffect, useState } from "react";
import generatePassword from "password-generator";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Users = (props: any) => {
  const [name, setName] = useState({
    value: "",
    isValid: true,
  });
  const [surname, setSurname] = useState({
    value: "",
    isValid: true,
  });
  const [email, setEmail] = useState({
    value: "",
    isValid: true,
  });
  const [role, setRole] = useState({
    value: "",
    isValid: true,
  });

  const [rows, setRows] = useState<any>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Number", width: 120 },
    {
      field: "role",
      headerName: "Role",
      width: 170,
    },
    {
      field: "name",
      headerName: "Name",
      width: 170,
    },
    {
      field: "surname",
      headerName: "Surname",
      width: 170,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
  ];

  const isValidEmail = (value: string) => {
    return value.includes("@") && value.includes(".") && value.length > 4;
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
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [openSnackbar]);

  const registerUser = () => {
    setRole({
      value: role.value,
      isValid: role.value !== "",
    });
    setName({
      value: name.value,
      isValid: name.value !== "",
    });
    setSurname({
      value: surname.value,
      isValid: surname.value !== "",
    });
    setEmail({
      value: email.value,
      isValid: isValidEmail(email.value),
    });
    if (email.isValid && name.isValid && surname.isValid && role.isValid) {
      console.log(name, surname, role.value, generatePassword(12, false));
    } else {
    }
  };

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
                value={role.value}
                error={!role.isValid}
                placeholder={!role.isValid ? "Required field" : ""}
                label="Role"
                onChange={(event) => {
                  setRole({
                    value: event.target.value,
                    isValid: true,
                  });
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"lawyer"}>Lawyer</MenuItem>
              </Select>
              {!role.isValid && (
                <FormHelperText error>Required field</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box sx={{ pb: "12px" }}>
            <TextField
              required
              placeholder={"name"}
              label={"name"}
              error={!name.isValid}
              helperText={!name.isValid ? "Required field" : ""}
              onChange={(event) => {
                setName({
                  value: event.target.value,
                  isValid: true,
                });
              }}
              sx={{ width: "300px" }}
            />
          </Box>
          <Box sx={{ pb: "12px" }}>
            <TextField
              required
              placeholder={"surname"}
              label={"surname"}
              error={!surname.isValid}
              helperText={!surname.isValid ? "Required field" : ""}
              onChange={(event) => {
                console.log(event.target.value);
                setSurname({
                  value: event.target.value,
                  isValid: true,
                });
              }}
              sx={{ width: "300px" }}
            />
          </Box>
          <Box sx={{ pb: "12px" }}>
            <TextField
              required
              placeholder={"email"}
              label={"email"}
              error={!email.isValid}
              helperText={
                !email.isValid
                  ? "Email is not correct. Example: example@email.com"
                  : ""
              }
              onChange={(event) => {
                setEmail({
                  value: event.target.value,
                  isValid: true,
                });
              }}
              sx={{ width: "300px" }}
            />
          </Box>

          <Box sx={{ pb: "25px" }}>
            <Button
              variant="outlined"
              onClick={registerUser}
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
      <Box sx={{ width: "inherit", pl: "7.5px" }}>
        <Paper sx={{ p: "20px" }}>
          <Box sx={{ pb: "30px" }}>
            <Typography>Users</Typography>
          </Box>
          <Box sx={{ height: 600, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
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

export default Users;
