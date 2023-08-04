import { Alert, Box, Paper, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import RegisterForm from "./Users/RegisterForm";

const Users = (props: any) => {
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
      field: "username",
      headerName: "Username",
      width: 170,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/users", {
        withCredentials: true,
      })
      .then((response: any) => {
        if (response.data.status === 200) {
          const users = response.data.users;
          setRows(
            users.map((element: any, index: number) => ({
              id: index + 1,
              role: element.roleName,
              name: element.name,
              surname: element.surname,
              username: element.username,
              email: element.email,
              info: {
                id: element.roleId,
              },
            }))
          );
        }
      });
  });

  return (
    <>
      <RegisterForm />
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
    </>
  );
};

export default Users;
